export const mainDashboard = (req, res) => {
    res.send("Welcome to Jane's main route dashboard!");
};

export const getProfile = (req, res) => {
    res.json({ 
        name: "Lady Jane Laurente", 
        role: "Student", 
        institution: "Mindoro State University" 
    });
};

export const getStatus = (req, res) => {
    res.send("Status: XianFire framework application is running smoothly.");
};

export const getTech = (req, res) => {
    res.json({ 
        stack: ["Node.js", "Express", "Handlebars", "JavaScript"] 
    });
};

export const getContact = (req, res) => {
    res.send("Contact: Reach out via Mindoro State University portal.");
};