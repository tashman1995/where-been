import { auth, clerkClient } from "@clerk/nextjs/server";
import React from "react";

async function Activities() {
  const getActivities = async () => {
    const { userId } = await auth();
    if (!userId) return [];
    console.log("userId", userId);
    const data = await clerkClient.users.getUserOauthAccessToken(
      userId || "",
      "oauth_custom_my_strava_provider",
    );

    if (!data) {
      return [];
    }

    const firstToken = data[0];

    const token = firstToken.token;
    // const token = data?[0];
    const url = "https://www.strava.com/api/v3/athlete/activities";

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const activities = await response.json();

    return activities;
  };

  const activities = await getActivities();
  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities
          ? activities.map((activity: any) => (
              <li key={activity.id}>{activity.name}</li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default Activities;
