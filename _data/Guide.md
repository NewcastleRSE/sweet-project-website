- These .yml files contain data which feeds into the website.
- You can change the data within these files but ensure you keep the spacing and format the same.
- Lets look at an example of how to add information

\_data/team.yml

- categoryName: Co-Lead Investigators
  categoryData:

  - name: Professor Linda Sharp
    title: Co-Lead Investigator
    jobTitle: Professor of Cancer Epidemiology
    affiliation: Newcastle University
    imageURL: /assets/images/Linda.jpg
    url: https://www.ncl.ac.uk/medical-sciences/people/profile/lindasharp.html

  - name: Professor Eila Watson
    title: Co-Lead Investigator
    jobTitle: Professor of Supportive Cancer Care
    affiliation: Oxford Brookes University
    imageURL: /assets/images/Eila.jpg
    url: https://www.brookes.ac.uk/profiles/staff/eila-watson

- categoryName: The Core Team
  categoryData:
  - name: Dr Jo Brett
    title: Researcher/Co-applicant
    affiliation: Oxford Brookes University
    imageURL: "/assets/images/core-team/Jo-Brett.jpg"

If I want to add another name to the core team, I can copy and paste the one that is already there and change the information, ensuring the spacing stays the same:

- categoryName: The Core Team
  categoryData:

  - name: Dr Jo Brett
    title: Researcher/Co-applicant
    affiliation: Oxford Brookes University
    imageURL: "/assets/images/core-team/Jo-Brett.jpg"

  - name: Miss Alice Longe
    title: Clinical Trial Manager
    affiliation: Warwick Clinical Trials Unit
    imageURL: "/assets/images/core-team/Alice-Longe.jpg"

If you want to add a url field which will create a link under the information, you can do so just as the items in the Co-Lead section:

- categoryName: The Core Team
  categoryData:

  - name: Dr Jo Brett
    title: Researcher/Co-applicant
    affiliation: Oxford Brookes University
    imageURL: "/assets/images/core-team/Jo-Brett.jpg"
    url: 'example.com'

  - name: Miss Alice Longe
    title: Clinical Trial Manager
    affiliation: Warwick Clinical Trials Unit
    imageURL: "/assets/images/core-team/Alice-Longe.jpg"
    url: 'example.com'
