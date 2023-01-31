# Structure
    This folder is for Sub Courses of Interest Group

    Page     : SubCourse.jsx
    CSS      : subcourse.module.css

#   SubCourse.jsx

    This file reads the prop "data" provided is from "src/Pages/InterestGroups/Course/Subcourse Data/android" in kotlin.js
    
    This file uses the following components in the same folder:

    Intro.jsx           - For Introduction Part
    SubModules.jsx      - For Learning Materials Part
    SubModules.jsx      - For Course Assignment Part
    CompletionTasks.jsx - For Tasks to be done after completion for availing Karma Points
    Help.jsx            - For the Need Help part of Page
 
# Intro.jsx
    Parameters:
        heading         : Subcourse Name
        description     : Description about sub course
        points          : Total Karma Points which can be availed for this subcourse
        image           : Link to the image on right side
# SubModules.jsx 
    Used for :Learning Materials,Course Assignment Sub Modules
    Parameters :
        heading             : Non-HighLighted Heading
        highlighted_heading : Highlighted Heading
        description         : Description about Sub Module
        cards               : The cards represents the assignment or materials to be used
    Components :
        Card                : This Card is used to render the each Card
# Card.jsx
    Parameters :
        card : card is an object containing 
                : heading       - Heading of the Assignment or Learning Material
                : description   - Description about it
                : buttons       - The actions available
    Components :
        Button : Renders each buttons
#   Button.jsx
    Parameters :
        button : button is an obect containing
                    : name - function of the button
                    : link - link to button leads

# CompletionTasks.jsx
    Parameters :
        heading             :   Non-highlighted Heading
        highlighted_heading :   Highlighted Heading
        description1        :   How and in which Channel to post for availing Karma points
        description2        :   What all data to be added while submitting for karma points in channels
        hashtags            :   Hashtags for each assigment
        example             :   Example of submitting task on discord

    Components:
        Bold.jsx            : The part of string inside <b></b> tag in a given in string is converted to Bold
# Bold.jsx    
    The part of string inside <b></b> tag in a given in string converted to Bold
    Parameter :
        text : reads a string  
# Help.jsx  