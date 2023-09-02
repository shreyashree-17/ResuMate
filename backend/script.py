import re
import sys
import json
import unicodedata

def extract_text_between_keywords(text, keywords):
    divided_text = {}

    for keyword1 in keywords:
        for keyword2 in keywords:
            if keyword1 != keyword2:
                start_keyword = keyword1.lower()
                end_keyword = keyword2.lower()
                pattern = rf"{re.escape(start_keyword)}(.*?){re.escape(end_keyword)}"
                match = re.search(pattern, text, re.IGNORECASE)

                if match:
                    divided_text[f"{start_keyword}"] = match.group(1).strip()

    return divided_text

if __name__ == "__main__":
    # Read the resume data from command-line arguments
    resume_text = sys.argv[1]
    resume_text = unicodedata.normalize('NFKD', resume_text)
    resume_text = resume_text.replace('\x96', '-')
    resume_text = resume_text.replace('\u0304', '-')  # Replace '\u0304' with a hyphen '-'
    resume_text = resume_text.replace("•", "\\n")

    keywords = ["Qualifications","Achievements", "Projects", "experience", "Skills","Courses","positions of responsibility",  "skills", "education", "courses","projects", "achievements"]

    # Divide the text by keywords
    divided_text = extract_text_between_keywords(resume_text, keywords)

    # Create a JSON object
    json_output = json.dumps(divided_text, indent=4)
    print(json_output)