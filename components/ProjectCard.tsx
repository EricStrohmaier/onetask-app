import { questionsObject } from '@/app/data';
import { FC } from 'react';
import AllCards from './AllCards';
import styles from '@/app/style';


interface ProjectCardProps {
    answer: any;
  title: string;
  description: string; 
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, answer, }) => {
    
  
  return (
    <div>
      <div className="h-80 w-80 m-2 rounded-lg px-5 py-4 bg-gray-100 border border-transparent transition-colors hover:border-gray-300 flex flex-col justify-center items-center">
        <div className={`${styles.flexCenter}`}>
            <div>  {title} : {answer}</div>
        </div>

    
      </div>
    </div>
  );
};

export default ProjectCard;
