import UploadResume from "../components/UploadResume";
import DisplayFilteredResumeumes from "../components/DisplayFilteredResumes";
import DisplayPerson from "../components/DisplayPerson"; 
import './css/upload.css'

function Upload({handleUpload, resumes, filteredResumes, handleFilter}){
    return(
        <div>
            <UploadResume onUpload={handleUpload} />
            <DisplayPerson resumes={resumes}/>
        </div>
    )
}

export default Upload;