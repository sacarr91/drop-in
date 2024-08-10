import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import "../../utils/sponsorcard.css";
import defaultImage from "/images/baker.jpg";

const SkaterProfileCard = ({ skater }) => {
  // State will track whether a user is a friend with false value to update the state whenever necessary
  const [isFriend, setIsFriend] = useState(false);
  const [addFriend] = useMutation(ADD_FRIEND);
  const imageUrl = skater.image ? `images/${skater.image}` : defaultImage;

  const limitText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const handleAddFriend = async () => {
    try {
      const { data } = await addFriend({ variables: { friendId: skater._id } });
      if (data) {
        setIsFriend(true);
      }
    } catch (error) {
      console.error("Unable to add friends", error);
    }
  };
  console.log(handleAddFriend);

  return (
    <div className="row d-flex">
      <div className="col col-md-9 col-lg-7 col-xl-6">
        <div
          className="card"
          style={{
            borderRadius: "15px",
            background: "transparent",
            color: "rgb(101, 189, 71)",
            border: "none",
          }}
        >
          <div className="card-body p-4">
            <div className="d-flex">
              <div className="flex-shrink-0">
                <img
                  src={imageUrl}
                  alt={skater.name}
                  className="img-fluid"
                  style={{ width: "180px", borderRadius: "10px" }}
                />
              </div>
              <div className="flex-grow-1 ms-3">
                <h5 className="mb-1">{skater.name}</h5>
                <p className="mb-2 pb-1">{skater.role}</p>
                <div className="d-flex justify-content-start rounded-3 p-2 mb-2">
                  <div>
                    <p className="small mb-1">Age</p>
                    <p className="mb-0">{skater.age}</p>
                  </div>
                  <div className="px-3">
                    <p className="small mb-1">Level</p>
                    <p className="mb-0">{skater.levels}</p>
                  </div>
                </div>
                {skater.bio && <p>{limitText(skater.bio, 20)}</p>}
                <div className="d-flex pt-1">
                  <button
                    type="button"
                    className="btn me-1 flex-grow-1 headerbtn"
                    onClick={() =>
                      (window.location.href = `/profiles/${skater._id}`)
                    }
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleAddFriend}
                    className="btn w-100 text-nowrap headerbtn"
                    disabled={isFriend}
                  >
                    {isFriend ? "Friend Added" : "Add Me"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkaterProfileCard;
