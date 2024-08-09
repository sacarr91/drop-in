import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_FRIEND } from "../../utils/mutations";
import "../../utils/sponsorcard.css";
import defaultImage from "/images/baker.jpg";

const SkaterCard = ({ skater }) => {
  // State will track whether a user is a friend with a false value and has a function to update the state when necessary
  const [isFriend, setIsFriend] = useState(false);
  const [addFriend] = useMutation(ADD_FRIEND);
  const imageUrl = skater.image ? `images/${skater.image}` : defaultImage;

  const handleAddFriend = async () => {
    try {
      const { data } = await addFriend({ variables: { friendId: skater._id } });
      if (data) {
        setIsFriend(true);
      }
    } catch (err) {
      console.err("Error when adding friend:", err);
    }
  };
  return (
    <div
      className="sponsor-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="sponsor-card-overlay">
        <h3 className="sponsor-title">{skater.name}</h3>
        <p className="sponsor-description">{skater.bio}</p>
        <div className="sponsor-links">
          <a href={`/profiles/${skater._id}`} className="btn carocardbtn">
            View Our Page!
          </a>
          {/* Add Friend button */}
          <button
            onClick={handleAddFriend}
            className="btn carocardbtn"
            disabled={isFriend}
          >
            {isFriend ? "Friend Added" : "Add Friend"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkaterCard;
