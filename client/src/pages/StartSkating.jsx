import { Card, Container } from "react-bootstrap/";
import imageUrl from "../../public/images/boards-for-bros.png";

function CreateSkater() {
  return (
    <>
      <Container className="py-5">
        <center>
          <h1 className="bangers" style={{ color: "#65BD47" }}>
            Boards for Bros can help you get started with your very own first
            skateboard!
          </h1>
        </center>
        <Card className="bg-card2">
          <img
            src={imageUrl}
            alt="Skating"
            style={{ width: "100%", height: "auto" }}
          />
        </Card>

        <p className="oswald-wide" style={{ color: "#65BD47" }}>
          Boards for Bros are a group of skateboarders and compassionate
          individuals dedicated to giving all kids the opportunity to own their
          first skateboard. Beginning in 2006 at the Skatepark of Tampa, they
          started collecting and refurbishing skateboards for youth who couldn't
          afford them. In 2014, they became a 501(c)(3) nonprofit, committed to
          providing equipment, safe skate spots, and youth mentoring. Their
          model also empowers skateboarders to participate in community service
          as donors, volunteers, or project managers. Since 2016, they have
          expanded their successful Tampa-based initiative nationally, with
          chapters in North Carolina, New Jersey, New York, and California.
        </p>
        <h3>More information</h3>
                <ul>
                    <a href=''>Tips for Starting Out</a> - 
                    <br></br>
                    <a href=''>How to Skateboard: Step-by-Step</a> - TransWorld
                    <br></br>
                    <a href=''>A Beginners Guide</a> - Tactics
                    <br></br>
                    <a href=''>Learn to Skate Guide</a> - SkateboardGB
                    <br></br>
                    <a href=''>Basic Tips for Adults</a> - Ripped Laces
                </ul>
      </Container>
    </>
  );
}

export default CreateSkater;
