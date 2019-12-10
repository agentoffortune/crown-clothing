import React from "react";
import { DirectoryMenuContainer } from "./directory.styles";
import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors"
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
   
        return (
            <DirectoryMenuContainer>
                {sections.map(({id, ...sectionProps}) => (
                    <MenuItem key={id} {...sectionProps} />
                ))}
            </DirectoryMenuContainer>
        )
    
    

}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

  

export default connect(mapStateToProps)(Directory);