import React, { useEffect, useState } from "react";
import { fetchUserProfile } from "../../api";

function Rating(props) {
  const [userId, setUserId] = useState("");

  const fetchUser = async () => {
    const response = await fetchUserProfile(userId);

    if (response.success) {
      console.log(response.data[0]);
    }
  };

  return (
    <div>
      this is my rating
      <div>
        <input
          placeholder="Enter Coderforces ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={fetchUser}>Search</button>
      </div>
    </div>
  );
}

export default Rating;
