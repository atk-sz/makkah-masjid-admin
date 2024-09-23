import React from "react";
import EmailLink from "./Email";

const App: React.FC = () => {
  const emailBody = `
Respected Sir,

We wish to bring to your attention a matter concerning the Jumma Namaz timing change announced by Mr. Kouser Niyaz Mohammed, Administrator of Makkah Masjid. This decision was made one day prior to Jumma, causing significant disruption, particularly for our senior Musallis.

In Neelasandra, we have established a system where Jumma Namaz is offered every 15 minutes from 1:00 PM across 13 mosques. However, due to the sudden announcement, confusion arose, leading to two Jumma Jamaats being held at Makkah Masjid on 20/09/2024. This situation resulted in heated arguments among different groups of Musallis.

The decision made by Mr. Kouser Niyaz Mohammed has disturbed the peace and tranquility of our mosque. We, the undersigned Musallis, respectfully request that the Waqf Board conduct immediate elections to form a new committee for the smooth functioning of our mosque's affairs.

We appreciate your prompt attention to this matter.

Thanking You,

Names and Mobile Numbers:
1.  
2.  
3.  
4.  
5.  
6.  
7.  
8.  
9.  
10.
`;

  return (
    <div>
      <EmailLink
        recipients={["kmdc.ho.info@gmail.com", "info@karwakf.org"]}
        cc={["housingwmminbza@gmail.com"]}
        subject="Change in Jumma Namaz Timing without Procedure by Mr. Kouser Niyaz Mohammed - Administrator, Makkah Masjid Neelasandra"
        body={emailBody}
      />
    </div>
  );
};

export default App;
