import styled from 'styled-components';

export const CourseVideo = styled.div`
  display: flex;
  background-color: #000;
  color: #fff;
`;

export const Sidebar = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #111;
  display: flex;
  flex-direction: column;
`;

export const CourseTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

export const CourseSubtitle = styled.h3`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const LessonList = styled.div`
  flex-grow: 1;
`;

export const Section = styled.div`
  margin-bottom: 10px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #222;
  cursor: pointer;
`;

export const SectionTitle = styled.div``;

export const ToggleButton = styled.div`
  font-size: 1.2em;
`;

export const LessonItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: ${props => (props.active ? '#00a9ce' : 'transparent')};
  cursor: pointer;
`;

export const LessonTitle = styled.div``;

export const LessonDuration = styled.div``;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const VideoTitle = styled.h1`
  font-size: 1.5em;
  margin-bottom: 20px;
`;

export const VideoPlayer = styled.video`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const VideoActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ConcludedButton = styled.button`
  background-color: #00a9ce;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

export const RateLesson = styled.div`
  margin-bottom: 20px;
`;

export const Stars = styled.div`
  display: flex;
`;

export const Star = styled.span`
  font-size: 1.5em;
  margin-right: 5px;
  cursor: pointer;
`;

export const Attachments = styled.div`
  margin-top: 20px;
`;

export const AttachmentTitle = styled.h3`
  margin-bottom: 10px;
`;

export const AttachmentLink = styled.a`
  color: #00a9ce;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
`;
