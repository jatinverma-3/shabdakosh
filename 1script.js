function toggleAdditionalInfo() {
    const additionalInfo = document.getElementById('additionalInfo');
    const toggleButton = document.getElementById('toggleButton');
    if (additionalInfo.style.display === 'none' || additionalInfo.style.display === '') {
        additionalInfo.style.display = 'block';
        toggleButton.textContent = 'Hide Additional Information';
    } else {
        additionalInfo.style.display = 'none';
        toggleButton.textContent = 'Add Additional Information';
    }
}

function generateSOP() {
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const university = document.getElementById('university').value;
    const background = document.getElementById('background').value;
    const goals = document.getElementById('goals').value;
    const strengths = document.getElementById('strengths').value;
    const anecdote = document.getElementById('anecdote').value || '';
    const skills = document.getElementById('skills').value || '';
    const challenges = document.getElementById('challenges').value || '';

    const paragraph1 = `My name is ${name}, and I am eager to apply for the <strong>${course}</strong> program at ${university}. This opportunity to join such a prestigious institution and advance in the field of ${course} is truly inspiring and aligns perfectly with my academic aspirations. I have always been passionate about this field and believe that studying at ${university} will provide me with the knowledge and skills necessary to excel.`;

    const paragraph2 = `My educational background has been rich and varied, laying a solid foundation for my future goals. I have always been driven by a curiosity for knowledge and a passion for learning. My previous experiences include ${background}, which have equipped me with the skills and insights needed to excel in this field. My career goals are to leverage this background to make a significant impact in my industry, continually pushing the boundaries of what is possible. I aim to contribute to groundbreaking research and innovations, ensuring that my work leaves a lasting positive impact on the field and society as a whole.`;

    const paragraph3 = `${anecdote ? anecdote + ' ' : ''}${skills ? skills + ' ' : ''}${challenges ? challenges + ' ' : ''}`;

    const paragraph4 = `What makes me an exceptional candidate is my unwavering dedication to achieving excellence in every endeavor. I bring a unique blend of academic prowess, practical experience, and a relentless drive to succeed. My commitment to personal and professional growth is evidenced by my past achievements and my future aspirations. I am confident that my contributions will add significant value to your esteemed program and help me reach my full potential.`;

    const sop = `
        <h2>Statement of Purpose</h2>
        <p>${paragraph1}</p>
        <p>${paragraph2}</p>
        <p>${paragraph3}</p>
        <p>${paragraph4}</p>
    `;

    localStorage.setItem('generatedSOP', sop);
    window.location.href = 'output.html';
}
