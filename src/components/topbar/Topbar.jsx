import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">dannyell</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://scontent.flos8-1.fna.fbcdn.net/v/t1.6435-9/120271271_2848414075389262_8545576178151574951_n.jpg?_nc_cat=105&ccb=1-6&_nc_sid=730e14&_nc_eui2=AeFT_hqJhVCgOgJFF_SPYJJCD_yOFzi8uIsP_I4XOLy4i128N8nVbXBxgDhS7324U0gLSQs3BZxYqmfDXMYm9UK8&_nc_ohc=GJJdiVqjB7MAX8S9rQ6&_nc_ht=scontent.flos8-1.fna&oh=00_AT8BmMJ-Ghs_Natfem3uLxqJ2fcrPesIy01HsRVNIRlLmg&oe=629C0B0E" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
      
   

