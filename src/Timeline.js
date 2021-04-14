import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimelineElement.js';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CreateIcon from '@material-ui/icons/Create';
import MenuBookIcon from '@material-ui/icons/MenuBook';

function Timeline() {
  return (
    <VerticalTimeline>
      <TimelineElement
        date="Janurary 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 1"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <TimelineElement
        date="March 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 2"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/1359/manifest.json"
        description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
      />
      <TimelineElement
        date="April 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 3"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="May 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 4A"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/1359/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="May 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 4B"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="June 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 5"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="July 2001"
        iconStyle={{ background: 'rgb(49,94,209)', color: '#fff' }}
        icon={<MenuBookIcon />}
        draft="Published Version"
        chapter="Chapter 1"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="August 2001"
        iconStyle={{ background: 'rgb(255,66,66)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 1A"
        chapter="Chapter 2"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="September 2001"
        iconStyle={{ background: 'rgb(255,66,66)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 1B"
        chapter="Chapter 2"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="September 2001"
        iconStyle={{ background: 'rgb(255,66,66)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 1C"
        chapter="Chapter 2"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="October 2001"
        iconStyle={{ background: 'rgb(255,66,66)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 2"
        chapter="Chapter 2"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="December 2001"
        iconStyle={{ background: 'rgb(255,66,66)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 3"
        chapter="Chapter 2"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="March 2002"
        iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 1"
        chapter="Chapter 3"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />
      <TimelineElement
        date="April 2002"
        iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 2"
        chapter="Chapter 3"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <TimelineElement
        date="July 2002"
        iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 3"
        chapter="Chapter 3"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        sub1_date="July 2002"
        sub1_iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        sub1_icon={<CreateIcon />}
        sub1_position="left"
        sub1_draft="Draft 3A"
        sub1_chapter="Chapter 3"
        sub1_url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        sub1_description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        sub2_date="July 2002"
        sub2_iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        sub2_icon={<CreateIcon />}
        sub2_position="left"
        sub2_draft="Draft 3B"
        sub2_chapter="Chapter 3"
        sub2_url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        sub2_description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <TimelineElement
        date="August 2002"
        iconStyle={{ background: 'rgb(67,167,0)', color: '#fff' }}
        icon={<CreateIcon />}
        draft="Draft 4"
        chapter="Chapter 3"
        url="https://data.getty.edu/museum/api/iiif/3034/manifest.json"
        description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      />

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(53, 53, 53)', color: '#fff' }}
        icon={<LibraryBooksIcon />}
      />
    </VerticalTimeline>
  );
}

export default Timeline;