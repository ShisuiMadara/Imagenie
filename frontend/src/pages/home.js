import react from "react";
import CustomCard from "../component/card/card.js"

export default class Home extends react.Component {
    render(props) {
        
        return (
            <div>
                <CustomCard
                title="copy"
                url="../images/copy.png"
                description="Copy image"   >

                </CustomCard>
            </div>
        );
    }
}
