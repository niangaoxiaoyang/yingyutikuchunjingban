const questions = [
  {
    question: "The plant leaves began to __________ under the harsh sun, lacking water.",
    options: ["flourish", "shrivel", "sprout", "thrive"],
    answer: 1,
  },
  {
    question: "The new policy aims to ensure that all employees can __________ the changes in the industry and remain competitive.",
    options: ["weather", "avoid", "adapt", "adjust"],
    answer: 0,
  },
  {
    question: "Completing the project brought a __________ sense of achievement to the team, as they celebrated their hard work and the successful outcome of their efforts.",
    options: ["frustrating", "gratifying", "disappointing", "anxious"],
    answer: 1,
  },
  {
    question: "She managed to __________ from making a hasty decision, despite the pressure from her colleagues.",
    options: ["indulge", "yield", "submit", "refrain"],
    answer: 3,
  },
  {
    question: "The peaceful and __________ atmosphere of the countryside provided a welcome respite from the noise and stress of city life.",
    options: ["chaotic", "turbulent", "tranquil", "disturbing"],
    answer: 2,
  },
  {
    question: "The survivor shared her story of the __________ experience she endured during the conflict, detailing the fear, pain, and resilience that characterized her journey.",
    options: ["harrowing", "blissful", "peaceful", "serene"],
    answer: 0,
  },
  {
    question: "Despite the numerous challenges she faced, she was always looking forward and __________ to achieve her dreams, drawing inspiration from her inner strength and resilience.",
    options: ["aspired", "lamented", "hesitated", "procrastinated"],
    answer: 0,
  },
  {
    question: "The new policy aims to __________ all aspects of employee well-being, from physical health to mental and emotional support, ensuring a comprehensive approach to workplace wellness.",
    options: ["ignore", "encompass", "neglect", "bypass"],
    answer: 1,
  },
  {
    question: "Despite facing numerous __________, she never lost sight of her goals and continued to strive towards her dreams, even when the path seemed insurmountable.",
    options: ["opportunities", "adversities", "rewards", "benefits"],
    answer: 1,
  },
  {
    question: "The intense and prolonged legal battle was an emotional __________ for the family, testing their resilience and unity to the limits.",
    options: ["triumph", "ordeal", "celebration", "festivity"],
    answer: 1,
  },
  {
    question: "The beauty of the moment was almost __________, beyond words, as the sunset painted the sky in vibrant hues and the gentle breeze whispered through the trees.",
    options: ["ineffable", "articulate", "eloquent", "resentful"],
    answer: 0,
  },
  {
    question: "During his illness, he often experienced vivid __________ that were difficult to distinguish from reality, causing confusion and distress for both him and his caregivers.",
    options: ["dreams", "nightmares", "visions", "hallucinations"],
    answer: 3,
  },
  {
    question: "Safety is the __________ concern when planning any event, whether it's a small gathering or a large-scale festival, ensuring that all participants are protected from potential hazards.",
    options: ["minor", "negligible", "paramount", "trivial"],
    answer: 2,
  },
  {
    question: "He was so __________ in his work that he didn't notice the time passing by.",
    options: ["distracted", "focused", "engrossed", "concentrated"],
    answer: 2,
  },
  {
    question: "After the storm, the community worked together to deal with the __________ left behind, including fallen trees, damaged homes, and disrupted infrastructure.",
    options: ["progress", "aftermath", "prosperity", "revival"],
    answer: 1,
  },
  {
    question: "She dedicated herself to advancing knowledge in her chosen academic __________, publishing several groundbreaking papers.",
    options: ["region", "territory", "scope", "province"],
    answer: 3,
  },
  {
    question: "Throughout history, people have faced numerous __________ and challenges, yet many have found the strength to overcome them.",
    options: ["tribulations", "conveniences", "amenities", "luxuries"],
    answer: 0,
  },
  {
    question: "The __________ provided insightful analysis of the game, highlighting key moments and player performances.",
    options: ["reporter", "analyst", "commentator", "reviewer"],
    answer: 2,
  },
  {
    question: "He tried to focus on his work, but his mind was __________ with thoughts of what had happened.",
    options: ["preoccupied", "disengaged", "indifferent", "apathetic"],
    answer: 0,
  },
  {
    question: "The accident caused significant __________ for everyone involved, leaving deep emotional scars.",
    options: ["elation", "trauma", "therapy", "jubilation"],
    answer: 1,
  },
  {
    question: "The new product launch created a real __________ among consumers, generating widespread interest and media coverage.",
    options: ["boycott", "promotion", "sensation", "indignation"],
    answer: 2,
  },
  {
    question: "The professor’s lecture was highly __________, requiring students to engage in deep and critical thinking about the complex concepts presented.",
    options: ["resourceful", "learned", "rational", "cerebral"],
    answer: 3,
  },
  {
    question: "The company’s latest __________ involves launching a new line of eco-friendly products, which is expected to boost its market share and reputation.",
    options: ["adventure", "projection", "undertaking", "mission"],
    answer: 2,
  },
  {
    question: "Despite the high __________ involved in the project, including financial risks and potential reputational damage, the team remained confident and focused on their goal of delivering a groundbreaking product.",
    options: ["destruction", "stakes", "odds", "hazards"],
    answer: 1,
  },
  {
    question: "The relentless pursuit of perfection, involving countless rounds of testing and refinement, led to a product that was virtually __________ and met the highest standards of quality.",
    options: ["spotless", "flawless", "complete", "intact"],
    answer: 1,
  },
  {
    question: "The device was a technological __________, designed with innovative features to solve a specific problem in a unique and efficient way, setting it apart from existing solutions.",
    options: ["creature", "structure", "contrivance", "procedure"],
    answer: 2,
  },
  {
    question: "Her __________ beauty, enhanced by her natural grace and elegance, caught everyone's attention at the event, making her the center of admiration and envy.",
    options: ["magnificent", "natural", "fetching", "elegant"],
    answer: 2,
  },
  {
    question: "The old building began to __________ over time, its once grand and sturdy structure now reduced to ruins due to years of neglect and exposure to the elements.",
    options: ["compose", "contaminate", "disintegrate", "decline"],
    answer: 2,
  },
  {
    question: "The company’s marketing campaign generated a lot of __________, but despite the extensive media coverage and promotional activities, it failed to translate into increased sales.",
    options: ["hype", "propaganda", "promotion", "sentiment"],
    answer: 0,
  },
  {
    question: "Despite the product’s many intrinsic qualities, such as durability and functionality, its __________ value was not fully recognized by consumers, leading to lower market penetration.",
    options: ["external", "extrinsic", "apparent", "outward"],
    answer: 1,
  },
  {
    question: "The basic design of the machine was quite __________, using simple and straightforward components, but it proved to be highly effective and reliable in practical applications.",
    options: ["simple", "primary", "minimal", "rudimentary"],
    answer: 3,
  },
  {
    question: "She was completely __________ by the unexpected question during the interview, unable to form a coherent response and feeling thoroughly unprepared for the challenge.",
    options: ["composed", "flummoxed", "poised", "serene"],
    answer: 1,
  },
  {
    question: "The company’s __________ efforts to improve customer service have resulted in a significant increase in customer satisfaction and loyalty.",
    options: ["active", "intermittent", "occasional", "relentless"],
    answer: 3,
  },
  {
    question: "The artist's work commanded great __________ from the art community, inspiring many young painters and critics alike with its profound depth and artistic brilliance.",
    options: ["disrespect", "reverence", "despise", "regard"],
    answer: 1,
  },
  {
    question: "She was unexpectedly caught by a colleague while she was __________ on her boss's private phone conversation, which was taking place through an open door in the office.",
    options: ["eavesdropping", "listened", "overhearing", "intercepted"],
    answer: 0,
  },
  {
    question: "The company’s financial __________ allowed it to survive the economic downturn.",
    options: ["perfection", "immunity", "incredibility", "invulnerability"],
    answer: 3,
  },
  {
    question: "She spent hours __________ over the details of the contract, meticulously ensuring that every clause was accurate and fair to protect her interests and those of her clients.",
    options: ["inspecting", "examining", "poring", "studying"],
    answer: 2,
  },
  {
    question: "The __________ nature of the problem, involving complex interactions between multiple variables, made it difficult for the researchers to find a clear and effective solution.",
    options: ["detrimental", "abstruse", "mysterious", "critical"],
    answer: 1,
  },
  {
    question: "To stay ahead in the competitive market, the company must __________ new strategies and technologies to enhance its products and services.",
    options: ["avoid", "weather", "implement", "navigate"],
    answer: 2,
  },
  {
    question: "His public __________, carefully crafted to project a strong and charismatic image, was very different from his private self, leading many to question the authenticity of his public persona.",
    options: ["persona", "appearance", "face", "guise"],
    answer: 0,
  }
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById("question-container");
  const nextButton = document.getElementById("next-button");
  const progressText = document.getElementById("progress");
  const progressBar = document.getElementById("progress-bar");

  function loadQuestion() {
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
      <h2>${question.question}</h2>
      ${question.options
        .map(
          (option, index) =>
            `<button class="option-button" data-index="${index}">${option}</button>`
        )
        .join("")}
    `;
    document.querySelectorAll(".option-button").forEach((button) =>
      button.addEventListener("click", handleAnswer)
    );
    nextButton.disabled = true;
  }

  function handleAnswer(e) {
    const selectedIndex = parseInt(e.target.dataset.index);
    const question = questions[currentQuestionIndex];
    document.querySelectorAll(".option-button").forEach((button, index) => {
      if (index === question.answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
      }
      button.disabled = true;
    });
    if (selectedIndex === question.answer) {
      score++;
    }
    nextButton.disabled = false;
  }

  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateProgressBar();
      loadQuestion();
      progressText.textContent = `进度: ${currentQuestionIndex + 1}/${questions.length}`;
    } else {
      questionContainer.innerHTML = `<h2>答题完成！</h2><p>正确率: ${(score / questions.length) * 100}%</p>`;
      nextButton.style.display = "none";
    }
  });

  function updateProgressBar() {
    progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
  }

  loadQuestion();
  updateProgressBar();
  progressText.textContent = `进度: 1/${questions.length}`;
});
