import fbPic from "../assets/fb logo.png"
import gitPic from "../assets/git logo.png"
import linkedPic from "../assets/linked.png"
import XPic from "../assets/x logoo.png";
import { Badge } from "@mui/material"

function Footer() {
    return <div style={{
        backgroundColor: "#ffcaff",
        position: "static"
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Facebook />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <Git />
                </Badge>
            </div>
            <div style={{ marginRight: 30 }}>
                <Badge color="secondary">
                    <X />
                </Badge>
            </div>
            <Badge color="secondary">
                <LinkedIn />
            </Badge>
        </div>


    </div>
}

function Facebook() {
    return <a href="https://www.facebook.com/profile.php?id=100018304062168"><img src={fbPic} alt="Facebook" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function Git() {
    return <a href="https://github.com/divy1607"><img src={gitPic} alt="GitHub" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function LinkedIn() {
    return <a href="https://www.linkedin.com/in/divyansh-tripathi-7a1141242/"><img src={linkedPic} alt="LinkedIn" style={{
        width: '30px', height: 'auto'
    }} /></a>
}

function X() {
    return <a href="https://twitter.com/sadandmad101"><img src={XPic} alt="X" style={{
        width: '30px', height: 'auto'
    }} /></a>
}
export default Footer