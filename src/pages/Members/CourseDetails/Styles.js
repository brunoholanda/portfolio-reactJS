import styled from 'styled-components';

export const CourseDetails = styled.div`
  background-color: #000;
  color: #fff;
  padding: 20px;
`;

export const Header = styled.div`
  text-align: center;
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const TitleContent = styled.div`
display: flex;
justify-content: center;
`;


export const CourseTitle = styled.h1`
  font-size: 2em;
  margin: 10px 0;
`;

export const CourseSubtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: ${props => (props.primary ? '#00a9ce' : '#fff')};
  color: ${props => (props.primary ? '#fff' : '#000')};
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  font-size: 1em;
`;

export const CourseInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Rating = styled.div`
  margin-right: 20px;
`;

export const RatingValue = styled.span`
  font-size: 1.5em;
  font-weight: bold;
`;

export const Enrollment = styled.div``;

export const CourseDuration = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const VideoPromo = styled.div`
  display: flex;
  justify-content: center;
  margin: 5REM;
`;


export const DurationItem = styled.div`
  margin: 0 20px;
  text-align: center;
`;

export const DurationTime = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`;

export const CourseContent = styled.div`
  margin-bottom: 20px;
`;

export const ContentTitle = styled.h2`
  margin-bottom: 10px;
`;

export const ContentDescription = styled.p`
  line-height: 1.5;
`;

export const CourseSidebar = styled.div`
  background-color: #111;
  padding: 20px;
  margin-top: 20px;
`;

export const SidebarItem = styled.div`
  margin-bottom: 10px;
`;
