import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Button from '@material-ui/core/Button';
import Mirador from './Mirador.js';
import ReactDOM from 'react-dom';
import TimelineSubElement from './TimelineSubElement.js';
import React from 'react';

const styles = {
    viewBtn: {
        marginTop: "20px",
    },
}

function handleClick(url, url2) {
    if (url2 == null){
        ReactDOM.render(
            <Mirador config={{
                id: "mirador",
                manifests: {
                    "https://data.getty.edu/museum/api/iiif/127957/manifest.json": {
                        provider: "Getty",
                    }
                },
    
                windows: [
                    {
                        loadedManifest: url, suggestedSearches: ['NSF'], thumbnailNavigationPosition: 'far-bottom'
                    },
                ]
            }} plugins={[]} />,
            document.getElementById("root")
        );
    }
    else{
        ReactDOM.render(
            <Mirador config={{
                id: "mirador",
                manifests: {
                    "https://data.getty.edu/museum/api/iiif/127957/manifest.json": {
                        provider: "Getty",
                    },
                    "https://data.getty.edu/museum/api/iiif/106420/manifest.json": {
                        provider: "Getty",
                    }
                },
    
                windows: [
                    {
                        loadedManifest: url, suggestedSearches: ['NSF'], thumbnailNavigationPosition: 'far-bottom'
                    },
                    {
                        loadedManifest: url2, suggestedSearches: ['NSF'], thumbnailNavigationPosition: 'far-bottom'
                    }
                ]
            }} plugins={[]} />,
            document.getElementById("root")
        );
    }
   
}

function TimelineElement(props) {
    let sub1, sub2;

    if (props.hasOwnProperty("sub1_chapter")) {
        sub1 = <TimelineSubElement draft={props.sub1_draft} chapter={props.sub1_chapter} description={props.sub1_description} date={props.sub1_date}
            iconStyle={props.sub1_iconStyle}
            icon={props.sub1_icon}
            position={props.sub1_position} />;
    }
    if (props.hasOwnProperty("sub2_chapter")) {
        sub2 = <TimelineSubElement draft={props.sub2_draft} chapter={props.sub2_chapter} description={props.sub2_description} date={props.sub2_date}
            iconStyle={props.sub2_iconStyle}
            icon={props.sub2_icon}
            position={props.sub2_position} />;
    }

    return (
        <React.Fragment>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={props.date}
                iconStyle={props.iconStyle}
                icon={props.icon}
            >
                <h3 className="vertical-timeline-element-title">{props.draft}</h3>
                <h4 className="vertical-timeline-element-subtitle">{props.chapter}</h4>
                <p>{props.description}</p>
                <Button variant="outlined" style={{ ...styles.viewBtn }} onClick={() => handleClick(props.url, props.url2)}>View document</Button>
            </VerticalTimelineElement>
            {sub1}{sub2}
        </React.Fragment>
    );
}

export default TimelineElement;