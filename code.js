var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+917037063859' style='text-decoration: none; color: inherit;'> <div class='socialItem' id='call'> <span style='font-size: 20px; margin: 5px;'>📞</span> <label class='number' style='color: #000; font-weight: bold;'>+91-7037063859</label> <span style='color: #000; font-weight: bold;'>Call</span> </div> </a> <a href='mailto:omgupta200304@gmail.com' style='text-decoration: none; color: inherit;'> <div class='socialItem'> <span style='font-size: 20px; margin: 5px; color: #000;'>✉️</span> <span style='color: #000; font-weight: bold; margin: auto 10px;'>Email</span> </div> </a> <a target='_blank' href='https://github.com/omgupta2004' style='text-decoration: none; color: inherit;'> <div class='socialItem'> <span style='font-size: 20px; margin: 5px; color: #000;'>💻</span> <span style='color: #000; font-weight: bold; margin: auto 10px;'>GitHub</span> </div> </a> <a target='_blank' href='https://wa.me/917037063859' style='text-decoration: none; color: inherit;'> <div class='socialItem'> <span style='font-size: 20px; margin: 5px; color: #000;'>💬</span> <span style='color: #000; font-weight: bold; margin: auto 10px;'>WhatsApp</span> </div> </a> <a target='_blank' href='https://www.instagram.com/omgupta_2004/' style='text-decoration: none; color: inherit;'> <div class='socialItem'> <span style='font-size: 20px; margin: 5px; color: #000;'>📸</span> <span style='color: #000; font-weight: bold; margin: auto 10px;'>Instagram</span> </div> </a> <a href='https://www.linkedin.com/in/om-gupta-600143291/' target='_blank' rel='noopener noreferrer' style='text-decoration: none; color: inherit;'> <div class='socialItem'> <span style='font-size: 20px; margin: 5px; color: #000;'>💼</span> <span style='color: #000; font-weight: bold; margin: auto 10px;'>LinkedIn</span> </div> </a> </div>";

var resumeString = "<div style='width: 100%; height: 600px; border: 2px solid #ddd; border-radius: 10px; overflow: hidden; margin: 10px 0;'><embed src='assets/OM Resume .pdf' type='application/pdf' width='100%' height='100%' style='border: none;' /></div><div class='downloadSpace' style='text-align: center; margin-top: 10px;'><div class='pdfname'><img src='images/pdf.jpeg'><label>Om Gupta Resume.pdf</label></div></div>";

var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52725287066098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi%2C%20India!5e0!3m2!1sen!2sin!4v1645079906766!5m2!1sen!2sin' class='map'></iframe></div><label class='add'><address>Delhi, India<br>Computer Science Student<br>Guru Gobind Singh Indraprastha University</address></label>";

function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    var hours = date.getHours();
    var minutes = date.getMinutes();
    
    // Add leading zero if needed
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    lastSeen.innerText = "last seen today at " + hours + ":" + minutes;
}

function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    dateLabel.innerText = hours + ":" + minutes;
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    
    setTimeout(function() { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Om Gupta</a>.</span><br><br>I am a <span class='bold'>Computer Science student 👨🏻‍💻📚</span> passionate about software development and data analytics.<br><br>Currently pursuing BTech from Guru Gobind Singh Indraprastha University with hands-on experience in Python, data analytics, and full-stack development.<br><br>Send <span class='bold'>'help'</span> to know more about me.<br>");
            }, 2000);
            break;
            
        case "help":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my technical skills<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'experience'</span> - to know my work experience<br><span class='bold'>'projects'</span> - to see my key projects<br><span class='bold'>'achievements'</span> - to know my achievements<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
            
        case "resume":
            sendTextMessage(resumeString);
            break;
            
        case "skills":
            sendTextMessage("<span class='sk'>Here are my technical skills:<br><br><span class='bold'>Programming Languages:</span><br>• Python<br>• C++<br><br><span class='bold'>Data Analytics & BI:</span><br>• Power BI<br>• Advanced Excel<br>• PostgreSQL<br>• Power Query<br><br><span class='bold'>Python Libraries:</span><br>• pandas, NumPy<br>• matplotlib<br>• scikit-learn<br><br><span class='bold'>Excel Expertise:</span><br>• PivotTables, Dashboards<br>• XLOOKUP, Slicers<br>• Conditional Formatting<br><br><span class='bold'>Developer Tools:</span><br>• Git, Visual Studio Code</span>");
            break;

        case "education":
            sendTextMessage("🎓 <span class='bold'>Education Details:</span><br><br><span class='bold'>BTech in Computer Science</span><br>Guru Gobind Singh Indraprastha University<br>Duration: August 2022 - May 2026<br>CGPA: 7.4<br>Location: Delhi, India<br><br><span class='bold'>12th Standard</span><br>Sumit Rahul Goel Senior Secondary School<br>Percentage: 79%<br>Duration: 2020 - 2022<br><br><span class='bold'>10th Standard</span><br>ST. Pauls Church College<br>Percentage: 87%<br>Duration: 2019 - 2020");
            break;

        case "experience":
            sendTextMessage("💼 <span class='bold'>Work Experience:</span><br><br><span class='bold'>1. 4C Plus</span> (May 2025 – August 2025)<br>Software Development Trainee<br>• Collaborated on real-time software solutions<br>• Backend module enhancements with Python & SQL<br>• Code reviews and agile development<br><br><span class='bold'>2. Centre For Railway Information Systems (CRIS)</span><br>Data Analytics & ML Intern (August 2025 - Present)<br>• Built Python/SQL pipelines, reduced prep time by 40%<br>• Developed delay prediction & anomaly detection models<br>• Created KPI dashboards with Power BI");
            break;

        case "projects":
            sendTextMessage("🚀 <span class='bold'>Key Projects:</span><br><br><span class='bold'>1. ChatBot | Python</span><br>Voice-controlled AI assistant with 20+ commands including YouTube downloads, screen recording, and real-time interaction.<br><a href='https://github.com/omgupta2004/Chatbot' target='_blank' class='alink'>🔗 View on GitHub</a><br><br><span class='bold'>2. License Plate Detector | Python</span><br>AI-powered license plate detection system using computer vision and machine learning.<br><a href='https://github.com/omgupta2004/LicensePlateDetector' target='_blank' class='alink'>🔗 View on GitHub</a><br><br><span class='bold'>3. Weather Insights Dashboard | Power BI</span><br>Real-time weather data visualization with API integration and forecasting.<br><a href='https://drive.google.com/file/d/1oTJJk0B_D5RomDxARSkErNoK5uXgCp6H/view?usp=sharing' target='_blank' class='alink'>🔗 View Dashboard</a><br><br><span class='bold'>4. Fitness Dashboard | Power BI</span><br>Comprehensive fitness tracking and analytics dashboard with interactive visualizations.<br><a href='https://drive.google.com/file/d/1uFBRwdfN1Fq6IgXLH3uY7AWGgakWh4ET/view?usp=sharing' target='_blank' class='alink'>🔗 View Dashboard</a><br><br><span class='bold'>5. Uber Analysis Dashboard | Power BI</span><br>Data-driven analysis of Uber ride patterns, pricing trends, and geographical insights.<br><a href='https://drive.google.com/drive/folders/1jFQK94ccHxdbCjDuq5xlJlQZIhXrCXBx?usp=sharing' target='_blank' class='alink'>🔗 View Analysis</a><br><br><span class='bold'>6. University Management System | PostgreSQL</span><br>Complete database system with normalized tables, stored procedures, and audit triggers.");
            break;

        case "achievements":
            sendTextMessage("🏆 <span class='bold'>Achievements:</span><br><br>• <span class='bold'>Vice Chairperson</span>, IEEE Student Branch (2024–Present)<br>  Managed 300+ members and technical workshops<br><br>• <span class='bold'>Vice President</span>, Cultural Council (2024–Present)<br>  Organized 10+ campus events, boosted engagement by 40%<br><br>• Built <span class='bold'>15+ technical projects</span> with real-world applications<br><br>• Expertise in dashboard creation and data visualization for actionable insights");
            break;
            
        case "contact":
            sendTextMessage(contactString);
            break;
            
        case "clear":
            clearChat();
            break;
            
        case "about":
            sendTextMessage("👨🏻‍💻 <span class='bold'>About Om Gupta</span><br><br>I'm a passionate Computer Science student at GGSIPU with a strong focus on <span class='bold'>software development</span> and <span class='bold'>data analytics</span>.<br><br>🚀 Currently gaining industry experience through internships at <span class='bold'>CRIS</span> (Centre for Railway Information Systems) and <span class='bold'>4C Plus</span>, where I work with Python, SQL, and ML models.<br><br>📊 I specialize in building <span class='bold'>data pipelines</span>, creating <span class='bold'>interactive dashboards</span>, and developing <span class='bold'>AI-powered solutions</span>.<br><br>🏆 As Vice Chairperson of IEEE and VP of Cultural Council, I lead technical workshops and manage campus events for 300+ students.<br><br>💡 I've built 15+ projects ranging from voice-controlled chatbots to complex database systems, always focusing on real-world applications and user experience.");
            break;
            
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send <span class='bold'>'help'</span> to know more about usage.<br><br>Try commands like: skills, experience, projects, achievements, contact");
            }, 2000);
            break;
    }
}

function sendTextMessage(msg) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    
    var hours = date.getHours();
    var minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    
    dateLabel.innerText = hours + ":" + minutes;
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerHTML = msg;
    
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}

function playSound() {
    audio.play().catch(function(error) {
        // Handle the error silently if audio can't be played
        console.log("Audio play failed:", error);
    });
}