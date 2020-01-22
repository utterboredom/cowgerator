import React from 'react';
import CowSVG from '../CowSVG';
import {connect} from 'react-redux';
import {combineColors} from '../../cowgorithms/color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEquals } from '@fortawesome/free-solid-svg-icons'

interface CattleVizProps {
    color1: string;
    color2: string;
}


const CattleViz = (props: CattleVizProps) => {
    const { color1, color2 } = props;
    return (
        <div className="cattleViz">
            <div className="card cow">
                <CowSVG color={color1} />
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faPlus} />
            </div>
            <div className="card cow">
                <CowSVG color={color2} />
            </div>
            <div className="card">
                <FontAwesomeIcon icon={faEquals} />
            </div>
             <div className="card cow">
                <CowSVG  color={combineColors(color1, color2)} />
            </div>
        </div>
    );
}

function mapStateToProps(state:any) {
    const { cattle } = state;
    return { 
        color1: cattle.color1 || "ffffff",
        color2: cattle.color2 || "ffffff"
    }
  }
  
  export default connect(mapStateToProps)(CattleViz)