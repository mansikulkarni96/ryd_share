import React,{Component} from "react";
import Script from 'react-load-script'


class Map extends Component {
    handleScriptCreate() {
        console.log('created')
    }

    handleScriptError() {
        console.log('error')
    }

    handleScriptLoad() {
        console.log('Load')
    }
    render() {

        return(
            <div>

            <Script
                url="../../../../public/js/map.js"
                onCreate={this.handleScriptCreate.bind(this)}
                onError={this.handleScriptError.bind(this)}
                onLoad={this.handleScriptLoad.bind(this)}
            /></div>
        )
    }
}
export default Map