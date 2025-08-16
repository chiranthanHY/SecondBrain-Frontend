import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"
import { toast } from "../hooks/use-toast"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  const handleShareBrain = async () => {
    setIsSharing(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
        share: true
      }, {
        headers: {
          "Authorization": localStorage.getItem("token")
        }
      });
      const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
      
      // Copy to clipboard and show success toast
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Brain shared successfully!",
        description: "Link copied to clipboard.",
        duration: 3000,
      });
    } catch (error) {
      console.error("Sharing failed:", error);
      toast({
        title: "Failed to share brain",
        description: "Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsSharing(false);
    }
  };

  return <div>
    <Sidebar />
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
      <CreateContentModal open={modalOpen} onClose={() => {
        setModalOpen(false);
      }} />
      <div className="flex justify-end gap-4 mb-8">
        <Button onClick={() => {
          setModalOpen(true)
        }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
        <Button 
          onClick={handleShareBrain}
          variant="secondary" 
          text={isSharing ? "Sharing..." : "Share brain"} 
          startIcon={<ShareIcon />}
          loading={isSharing}
        ></Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {contents.map(({ type, link, title, createdAt }) => <Card
            type={type}
            link={link}
            title={title}
         
        />)}
      </div>
    </div>
  </div>
}
