import { Card, Container } from "react-bootstrap/";
import imageUrl from "../../public/images/boards-for-bros.png";

function CreateSkater() {
  return (
    <>
      <Container className="py-5">
        <center>
          <h1>How to become a skateboarder!</h1>
          <p>Skateboarding is not only a sport, it's a culture with many fulfilling avenues from art, business and of course the actual sport of skateboarding!
          To become a skateboarder all you need is to get a skateboard and have fun. Skateboarders of all skills, ages and backgrounds start at the same place and none 
          forget their first skateboard! If you need a skateboard, local skate parks are a great way to find other skaters who can help you get used equipment. 
          As a tradition, many adult skateboarders will help kids out with boards and shoes when they change out for new ones. Of course, not every where are there safe places for kids
          to skate and it's always important to be safe when engaging new people, so there are other resources to help out. Specifically our friends at Boards for Bros setup community events and can be 
          contacted for assistance with getting your skateboard equipment. If you are a youth and are interested, take a look at Boards for Bros with your family and you will likely be able to get what you need 😀.
          If you want to learn more about Boards for Bros, click the link below!
          </p>
          <h1 className="bangers" style={{ color: "#65BD47" }}>
            Boards for Bros can help you get started with your very own first
            skateboard!
          </h1>
        </center>
        <p className="oswald-wide" style={{ color: "#65BD47" }}>
          Boards for Bros is a non-profit organization founded by professional skateboarder and skateshop owner Brian Schaffer 
          of the world famous Skatepark of Tampa. The organization is dedicated to assisting children and in acquiring professional skateboard equipment free of charge.
          Beginning in 2006 at the Skatepark of Tampa, they
          started collecting and refurbishing skateboards for youth who couldn't
          afford them. In 2014, they became a 501(c)(3) nonprofit, committed to
          providing equipment, safe skate spots, and youth mentoring. Their
          model also empowers skateboarders to participate in community service
          as donors, volunteers, or project managers. Since 2016, they have
          expanded their successful Tampa-based initiative nationally, with
          chapters in North Carolina, New Jersey, New York, and California.
        </p>
        <Card className="bg-card2">
          <center>
            <a href='https://boards4bros.org/'>
            <img
            src={imageUrl}
            alt="Skating"
            style={{ width: "50%", height: "auto" }}
          />
            </a>
            <br></br>
            <a href="https://boards4bros.org/">https://boards4bros.org/</a>
          </center>

        </Card>
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
