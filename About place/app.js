let historyStyle = document.getElementById("history");
let visionStyle = document.getElementById("vision");
let goalsStyle = document.getElementById("goals");

function history() {
    historyStyle.classList.add("active");
    visionStyle.classList.remove("active");
    goalsStyle.classList.remove("active");
    const historyContent = document.getElementById("paragraph");
    historyContent.textContent = "Karachi, the largest city in Pakistan, is located on the Arabian Sea and serves as the country's primary seaport and financial center. With a diverse population and vibrant culture, it is a melting pot of various ethnic and religious groups. The city has ancient roots and gained prominence during the British colonial period. Today, it is an economic powerhouse, hosting major industries and financial institutions. Karachi faces challenges such as rapid urbanization and safety concerns but remains a vital and dynamic metropolis.";
}

function vision() {
    visionStyle.classList.add("active");
    historyStyle.classList.remove("active");
    goalsStyle.classList.remove("active");
    const visionContent = document.getElementById("paragraph");
    visionContent.textContent = "Karachi envisions becoming a sustainable and economically prosperous global city. It aims to strengthen its role as a regional economic hub through infrastructure and technology investments. The city focuses on sustainable development, improving public transport, and green initiatives. Promoting social integration and inclusivity is key, ensuring equitable opportunities for all. Enhancing safety and security is a priority to foster a secure environment. Karachi seeks to invest in educational excellence and innovation, expanding its global connectivity and trade.";
}

function goals() {
    goalsStyle.classList.add("active");
    historyStyle.classList.remove("active");
    visionStyle.classList.remove("active");
    const goalsContent = document.getElementById("paragraph");
    goalsContent.textContent = "Karachi aims to become a major economic powerhouse by attracting foreign investment and creating job opportunities. The city plans to improve its infrastructure with enhanced public transportation and utilities. Sustainability is a key focus, with green initiatives and better waste management. Social equity is pursued through improved healthcare, education, and poverty reduction. Strengthening law enforcement and reducing crime are top priorities for safety. Karachi also seeks to preserve its cultural heritage and promote tourism. Increasing international trade and connectivity is essential for global integration.";
}

history()

