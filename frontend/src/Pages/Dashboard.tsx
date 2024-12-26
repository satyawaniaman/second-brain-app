// import { Button } from "../components/Button";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { CreateContentModel } from "../components/CreateContentModel";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
// import { PlusIcon } from "../icons/PlusIcon";

export function Dashboard() {
  return (
    <div>
      <CreateContentModel />
      <div className="flex gap-4 justify-end p-4">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
        <Button variant="secondary" text="Share" startIcon={<ShareIcon />} />
      </div>
      <div className="flex gap-4 flex-wrap">
        <Card
          type="youtube"
          title="motivation"
          link="https://youtube.com/watch?v=ucOBGWwjThM?si=BJX4m5TnbITW5_rp"
        />
        <Card
          type="twitter"
          title="tweet"
          link="https://x.com/NoahKingJr/status/1872278493544984971"
        />
      </div>
    </div>
  );
}
