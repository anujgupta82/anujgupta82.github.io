import React, { useState } from "react";
import BlogPostCard from "./BlogPostCard"; // Import BlogPostCard component
import BlogModal from "./BlogModal"; // Import BlogModal component
import BlogViewer from "../components/BlogViewer";
import NN_2_2 from "../assets/gradients/NN_2_2.jpeg";
import NN_4_1 from "../assets/gradients/NN_4_1.jpeg";
import NN_4_2 from "../assets/gradients/NN_4_2.jpeg";
import NN_generic from "../assets/gradients/NN_generic.jpeg";


function BlogPostPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Sample blog data for 2021
  const blogs2021 = [
    {
      id: 1,
      title: "Innovation in AI Teams",
      date: "Oct 22, 2021",
      excerpt:
        "Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary...",
      content: `
        <p>Innovation and AI are two words that often go hand in hand. However, depending on the type of setting an AI team is embedded in - the semantics on 'Innovation' can vary.</p>
        <br>
        <p>If you are part of the research lab, this often means AI team works on fundamental problems and create fundamental & new techniques to power cutting-edge solutions. They publish a lot, advance the entire area in a fundamental way - this is their true north star. It goes without saying this means lot of publications, paper presentation, talks & tutorials at research conferences, very close collaboration with academia etc.</p>
        <br>
        <p>When it comes to AI teams working in the product settings, the innovation here is of very different type. And in this post and next I will try n focus on this facet. There are mainly 4 type of innovations that happen in such teams:</p>
        <br>
        <p><b>1. Finding newer uses cases and touch points in your product(s) where AI can deliver a completely new experience to the user : </b>This innovation often creates USP/key differentiator for the product compared to the competition in the respective segment. And if the feature is killer, it changes the user's behavior which in turn changes user expectation. And then the competition has no other option but to play the catch-up game. This creates a very strong moat. For example, YouTube uses AI to generate subtitles in multiple languages on the fly. They have fundamentally changed user expectations and other platforms have to have a similar feature.</p>
        <br>
        <p>This kind of innovation is often not as easy as it may sound. I have written about this in an earlier post (ref : Hobbiton - Uses cases where AI can deliver great returns). This requires first principle thinking. Product managers who can envision features in a completely new way using AI, very close collaboration between AI & product teams to understand what is possible what is not, a very good execution to deliver A-class experience (despite AI model will make mistakes).</p>
        <br>
        <p><b>2. Building the dataset for the problem at hand : </b>For AI teams embedded in product settings, building a comprehensive dataset for the problem at hand is often 80% of the battle. Building such a dataset is never writing a bunch of queries on a massive data store at your disposal. AI Teams often have to come up with very smart strategies, hacks to augment data to arrive at a comprehensive dataset. Also, this is not a one-time activity but often highly iterative. What more type of data is needed - comes from the kind of mistakes your models are making.</p>
        <br>
        <p>I will soon be writing a dedicated post on some of the best examples I have seen/heard on innovative ideas to collect data.</p>
        <br>
        <p><b>3. Publishing paper/patent (doesn't happen that often) : </b>AI teams embedded in product teams do write patents and papers - but this is seldom their true north star.</p>
        <br>
        <p>So what about coming up with newer techniques? Rarely AI teams embedded in product teams do this. Why? Because in most cases, known techniques with a comprehensive dataset with rigorous evaluation itself can take your AI solution very very far on business metrics. From there on it is mostly a game of diminishing returns. Read about "later part of S curve" in my earlier post on "<a href="https://www.linkedin.com/posts/activity-6842736295173775360-etDf/" target="_blank" rel="noopener noreferrer">ROI in AI</a>". This is not true only if AI is the backbone of your product and your core value proposition.</p>
        <br>
        <p>To read more on AI in industry vs Academia, please read my earlier post "<a href="https://www.linkedin.com/posts/activity-6836567604467970048-nQu8/" target="_blank" rel="noopener noreferrer">Why machine learning in the industry is different from that is academia</a>"</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 2,
      title: "ROI in AI - Expectations vs Reality",
      date: "Oct 03, 2021",
      excerpt:
        "A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the 'energy' to help you move to the next orbit, most teams falter big time...",
      content: `
        <p>A lot of companies and teams are betting big on DeepTech like AI to drive the next phase of growth. While AI can certainly be the "energy" to help you move to the next orbit, most teams falter big time. While there are many reasons for this, one key reason is the ill-founded expectations by senior people (VPs, CXOs, business leaders etc) in the company. Today's post will explore this facet of AI - often the least spoken one.</p>
        <br>
        <p>Most leaders/companies start AI in their teams/product lines much later. Traditional corporate wisdom has always advocated "quick" wins because that is how one establishes themselves and gets the key stakeholders super excited. So they advocate the same in AI!</p>
        <br>
        <p>This is also driven by:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Articles on AI in popular media with lofty claims (remember the humanoid dancing in Tesla AI day or Sophia - not many people understand these are mere marketing and perception gimmicks)</li>
          <li style="display: list-item; margin-bottom: 10px;">The thought that AI at the end of the day is a code - so it cannot be very different from software engineering. The issues are mere initial hiccups which is always the case with any new tech, so is the case with AI</li>
        </ol>
        <br>
        <p>So most leaders expect the ROI curve in AI to be a vertical takeoff. This expectation is further fueled by the fact that AI doesn't come cheap - data, data engg & AI teams, talent cost, hardware cost, data collection & labeling cost and time etc, MLOps etc Read my previous write up titled the economics of AI</p>
        <br>
        <p>This is where most Orgs/Teams make THE mistake. The true ROI curve in AI is very very different from their expectations. As shown in the figure below, it follows a S shape curve.</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <img src="/images/ROI_blog.jpeg" alt="ROI S-Curve in AI" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto;" />
        </div>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Initial lower part of S: One needs to invest a lot of time and energy with very little ROI - finding the right use case, right quality and quantity of data and labels (more on this in another post), right modeling approach, right metrics etc. This can take anywhere between 1-3 years.</li>
          <li style="display: list-item; margin-bottom: 10px;">Middle part of S: This is where one gets the highest ROI per unit effort. This is because most of the hard work has been done in the first 1-3 years. All key stakeholders have a better understanding of the AI journey. This phase is all about building the 2nd/3rd version of AI systems</li>
          <li style="display: list-item; margin-bottom: 10px;">Later upper part of S: This is where the ROI again starts to stagnate. This phase is where your team is building the 6th/7th version of the system and trying to push systems performance to the upper 90s. This often requires completely new approaches, new algorithms. Its not just adding a couple of lines of code!</li>
        </ol>
        <br>
        <p>Another thing most folks don't necessarily understand is that each of the 3 different phases of the curve requires a very different strategy - type of goals, kind of skillsets, focus areas, etc</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 3,
      title: "Making AI Work For You",
      date: "Sep 18, 2021",
      excerpt:
        "I am often asked why AI is a hard technology (both in terms of time and money). There are multiple reasons for it...",
      content: `
        <p>I am often asked why AI is a hard technology? (both in terms of time and money). There are multiple reasons for it:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Finding the right use case: finding a problem that is important to its users and can be solved well by AI. I talked earlier on this here</li>
          <li style="display: list-item; margin-bottom: 10px;">Having the right data: most companies have tonnes of data but seldom have the data for the problem at hand. In AI its not just the quantity of data that matters but also the quality of data. Do you have the training data that resembles the production data very closely? Does it have enough data points that represent various outliers, mean data points, data points near the actual decision boundary etc</li>
          <li style="display: list-item; margin-bottom: 10px;">Labeling cost: If you need to get your data manually labeled, this will need lots of time and money. The process of labeling itself might not be straightforward. How do you benchmark the quality of labeling? If your labelers are making mistakes this can jeopardize the entire project.</li>
          <li style="display: list-item; margin-bottom: 10px;">Compute cost: the cost of the compute needed for training the model and for inference. This is especially crucial if your solution uses deep learning.</li>
          <li style="display: list-item; margin-bottom: 10px;">Going from a solution to the solution: In AI there is no one way to solve a problem. There are multiple ways and each will give you a different accuracy. Getting from the point where you have a model that gives you an acceptable performance to getting to a model that gives you fabulous performance is often a very long journey.</li>
          <li style="display: list-item; margin-bottom: 10px;">Fitting model into the product to get AI-driven feature: Its not just a simple API integration. One needs to figure out the best UX to serve the predictions, should this UX be intrusive or soft suggestions, UX should be able to gracefully handle the scenarios when the model makes mistakes, a mechanism to let the human take over when it is going all wrong for the end-user, instrumentation to collect data to continuously evaluate the performance of the model on prod data, instrumentation to collect data for future modeling efforts.</li>
          <li style="display: list-item; margin-bottom: 10px;">Need to retrain model: many times AI systems require one to retrain the model after every 15-30 days on the latest data.</li>
          <li style="display: list-item; margin-bottom: 10px;">Talent: DS/ML team alone cannot pull off all the above. You need good and diverse talent for this - ML/DS folks who can evaluate the various approaches depending on the situation and can take the most suitable one to build the right model (and not blindly apply DL), Data engineers to build data pipelines to collect all data, a product manager who can figure out right use case, build instrumentation, UX to handle mistakes, a AI leader who understands this entire life cycle and work very closely with business and speak their language. This talent doesn't come cheap.</li>
        </ol>
        <p>For AI effort to fail - going wrong on just one of the above is enough.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 4,
      title: "Why Machine Learning in Industry is different from that in Academia",
      date: "Sep 6, 2021",
      excerpt:
        "The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications...",
      content: `
        <p>The last decade has seen a crazy amount of advances in the field of AI. Equally astonishing is the speed with which these advances have made their way into industrial applications. Despite this there aren't a lot of successful AI systems around us.</p>
        <br>
        <p>The performance of a AI system stems from 2 key components:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Algorithmic technique used to build the model.</li>
          <li style="display: list-item; margin-bottom: 10px;">Dataset used to train the model. You change any one of them, the performance of the AI system will change.</li>
        </ol>
        <p>Academicians (owing to their bias & quest for fundamental advances) keep the dataset constant and vary the algorithm. This allows them to compare 2 AI algorithms and establish which one is better seamlessly. Further, in academia, the test set is usually a chunk of the dataset itself.</p>
        <br>
        <p>This approach doesn't work well in the industry. The industry works on the idea of Minimum Viable Product (MVP). The idea is never to build 'THE model' especially in the early days of an AI system. The idea is to build 'a model' that is good enough for various stakeholders to realize the value and deliver/estimate this value in the fastest possible manner. Further, the model should be able to do well on the production data and not on some benchmark dataset.</p>
        <br>
        <p>Also, note that the value is delivered by a system and not just the model. Model is just a small part of it. One needs to answer the following:</p>
        <br>
        <ol style="list-style-type: decimal; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system solve an important problem? a problem users deeply care about</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the value proposition of AI system fit well within the larger Value proposition of the product?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the AI system model and solve the problem (fairly) well? # of mistakes it makes? Is the cost of mistakes ok with your users or its catastrophic?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does one have the right type, quantity and quality of data to solve the problem at hand? If not, invest heavily in data collection and data plumbing first.</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the UI/UX deliver the predictions seamlessly and does it handle the mistakes gracefully? Does it allow the user to override a model especially when predictions are going wrong?</li>
          <li style="display: list-item; margin-bottom: 10px;">How well the system does on production data (which is often very different from training data) - drift in data, drift in labels, handle outliers etc</li>
          <li style="display: list-item; margin-bottom: 10px;">What is the cost of running an AI system? Cost of getting the data labeled continuously to benchmark systems performance?</li>
          <li style="display: list-item; margin-bottom: 10px;">Does the (medium-long term) returns from the AI system » overall investment in building and maintaining the AI system? [In short-medium most AI efforts are cost negative]</li>
        </ol>
        <p>The success of AI system depends on all the above. It is this that makes building AI systems in industry an 'Art' unlike the science of building 'models' in academia. In industry, the science of model building is necessary but not sufficient.</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 5,
      title: "Hobbiton - Uses cases where AI can deliver great returns",
      date: "Aug 20, 2021",
      excerpt:
        "One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool...",
      content: `
        <p>One often comes across organizations trying to apply AI to problems when it is really not needed. Such organizations often end up doing so because either someone in the org wants to look cool or a CXO in the company wants to start doing AI (mostly out of FOMO or ill-informed media articles with lofty claims). AI is just a tool to solve problems (though a powerful one), just like other problem-solving tools such as engineering, or operations. Today AI can solve some problems quickly & very well which was not possible until even a decade ago. But that doesn't mean AI is a sledgehammer for every difficult problem. Despite crazy advances in the last decade, AI is a very nascent, fragile and expensive technology and must be applied after due thought and not as a go-to approach for every problem in the world.</p>
        <br>
        <p>One of my favorite examples of this is Google's approach to "searching for special characters in Google Docs". Here is the problem statement: Most users who create docs or decks once in a while use special characters. But it is very hard to find the right special character when you need it. Given the large number of special characters that exist, one cannot show all of them to the user. To facilitate quick accessibility, one requires the ability to search for them. However, there is one particular problem with special characters - most users cannot remember them by name (try recalling names of 10 or more special characters yourself). This renders "textual search" useless. So, how does one solve this? Visual search!</p>
        <br>
        <div style="text-align: center; margin: 20px auto; display: flex; justify-content: center; align-items: center;">
          <a href="https://web.archive.org/web/20220401153355/https://anujgupta82.github.io/images/Google-Doc-Draw-Characters.gif" target="_blank" rel="noopener noreferrer">
            <img src="/images/Google-Doc-Draw-Characters.gif" alt="Google Docs Draw Characters Feature" style="max-width: 100%; height: auto; border-radius: 8px; margin: 0 auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1);" />
          </a>
        </div>
        <br>
        <p>Google used a very simple but powerful observation - most users can very easily recall how the special character that they need looks like, unlike their name. So, they provided a small sketch pad for users to draw what they remember and use the concepts from computer vision (Sketch-RNN) to suggest a few closest options based on the visual match. The same concept was later used to power <a href="https://web.archive.org/web/20220326173444/https://experiments.withgoogle.com/autodraw" target="_blank" rel="noopener noreferrer" style="color: #3477ad;">Auto draw</a></p>
        <br>
        <p>I often use this example to drive home the point that one often needs to think from first principles when thinking of AI-powered use cases. For the above-mentioned example, the more you think the more you will realize:</p>
        <br>
        <ul style="list-style-type: disc; margin-left: 20px; padding-left: 20px;">
          <li style="display: list-item; margin-bottom: 10px;">The problem could not have been solved by traditional engineering approaches.</li>
          <li style="display: list-item; margin-bottom: 10px;">It is a very well-defined narrow problem statement.</li>
          <li style="display: list-item; margin-bottom: 10px;">The core AI concept (Sketch-RNN) was just right to solve this problem statement well.</li>
          <li style="display: list-item; margin-bottom: 10px;">The solution (powered by AI in this case) really helped to solve the user's pain point and deliver happiness.</li>
        </ul>
        <p>Having said that - it is not that this application of AI changed the fate of google docs. More on changing the trajectory of products using AI in a separate post. Stay tuned!</p>
        <br>
        <p style="color: #3477ad;">#Learnings_From_AI_Trenches</p>
      `,
    },
    {
      id: 6,
      title: "Learnings from AI Trenches",
      date: "Aug 8, 2021",
      excerpt:
        "A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams...",
      content: `
        <p>A lot of people often ask me some of the key insights I gained up in my journey over last decade in building AI systems and teams.</p>
        <br>
        <p>Happy to share that over the next 1 year, I will try to put 1-2 posts every week sharing these insights. These will cover topics like ROI, how to do AI right, building and nurturing AI teams, why most AI projects fail, the right way to approach AI, when to apply AI, how AI is done in product teams, etc Follow <a href="#" style="color: #3477ad;">#Learnings_From_AI_Trenches</a> on LinkedIn. Stay tuned</p>
        <br>
        <p>If there is any topic you will like me to write about, pls comment in the post below. I will try and cover them as well. Let us make this super interactive.</p>
      `,
    },
  ];

   const blogs2016 = [

{
  id: 1,
  title: "Computing Gradients that go into training Neural Nets",
  date: "Aug 22, 2016",
  excerpt: "Training neural nets is all about computing gradients. In case you are new to this idea, refer to this awesome post by Andrej Karpathy. Briefly, deep down every ML problem is an optimization problem....",
  content: `
    <h2><strong>Introduction</strong></h2>
    <p>Training neural nets is all about <a href="http://deeplearning.stanford.edu/wiki/index.php/Deriving_gradients_using_the_backpropagation_idea" target="_blank" style="color: blue; text-decoration: underline;">computing gradients</a>. In case you are new to this idea, refer to this awesome <a href="http://karpathy.github.io/neuralnets/" target="_blank" style="color: blue; text-decoration: underline;">post</a> by Andrej Karpathy.</p>
    
    <p>Briefly, deep down every ML problem is an optimization problem. We want to "learn" (find) the weights which will result in least average loss. The way we do it is - start with arbitrary weights and keep adjusting them in small quantities until we get them right i.e. arrive at a set of values for which loss function has least value. Gradients tell us by how much should we adjust each of the weights. Not clear? Check this <a href="https://www.youtube.com/watch?v=yFPLyDwVifc" target="_blank" style="color: blue; text-decoration: underline;">video</a> by Andrew NG and this <a href="http://www.offconvex.org/2016/12/20/backprop/" target="_blank" style="color: blue; text-decoration: underline;">blog</a> by Sanjeev Arora.</p>

    <p>In this post we will focus on the maths that goes into computing these gradients - we will systematically derive gradients. The complexity of calculations depends on 3 things:</p>
    <ul>
      <li>1. Depth of the network</li>
      <li>2. Number of training examples (1 or more)</li>
      <li>3. Number of components in input (1=scalar, &gt;1=vector)</li>
    </ul>
    
    <p>Throughout this post we assume:</p>
    <ul>
      <li>1. No bias term.</li>
      <li>2. · is matrix multiplication, * is element wise product, × is scalar multiplication.</li>
      <li>3. All activations are <a href="https://www.quora.com/What-is-the-sigmoid-function-and-what-is-its-use-in-machine-learnings-neural-networks" target="_blank" style="color: blue; text-decoration: underline;">sigmoid a.k.a logistic</a>. It is defined as \\( f(u) = \\frac{1}{1 + e^{-u}} \\). If you plot it, it comes as:</li>
    </ul>

    <img src="/images/logistic.png" height="200" width="270" alt="Sigmoid function"/>
    <div class="thecap">Sigmoid function</div>
    <p>It is easy to see it is smooth and differentiable and bound between 0 and 1.</p>

    <h3><strong>Derivative</strong></h3>
    <p>The derivative of logistic function [σ] is simply:</p>
    <p>\\(\\frac{d}{dx} \\sigma(x) = \\sigma(x)(1-\\sigma(x))\\)</p>

    <br>
    <p>From where this comes? read on:</p>
    
    <p>\\(\\begin{align}
    \\frac{d}{dx} \\sigma(x) &= \\frac{d}{dx} \\left[ \\frac{1}{1+e^{-x}} \\right] \\\\
    &= \\frac{d}{dx} (1+e^{-x})^{-1} \\\\
    &= -(1+e^{-x})^{-2}(-e^{-x}) \\\\
    &= \\frac{e^{-x}}{(1+e^{-x})^2} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{e^{-x}}{(1+e^{-x})} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{(1 + e^{-x} -1)}{(1+e^{-x})} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\left( 1 - \\frac{1}{(1+e^{-x})} \\right) \\\\
    &= \\sigma(x)(1-\\sigma(x))
    \\end{align}\\)</p>

    <div class="block-math"><!-- BlockMath placeholder --></div>

    <p>Alternative step-by-step breakdown:</p>

  


    <p>\\(\\begin{align}
    \\frac{d}{dx} \\sigma(x) &= \\frac{d}{dx} \\left[ \\frac{1}{1+e^{-x}} \\right] \\quad \\text{(B)}\\\\
    &= \\frac{d}{dx} (1+e^{-x})^{-1} \\\\
    &= -(1+e^{-x})^{-2}(-e^{-x}) \\\\
    &= \\frac{e^{-x}}{(1+e^{-x})^2} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{e^{-x}}{(1+e^{-x})} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\frac{1 + e^{-x} -1}{(1+e^{-x})} \\\\
    &= \\frac{1}{(1+e^{-x})} \\cdot \\left( 1 - \\frac{e^{-x}}{(1+e^{-x})} \\right) \\\\
    &= \\sigma(x)(1-\\sigma(x)) \\quad \\text{(C)}
    \\end{align}\\)</p>

    <p>Likewise,</p>
    <p>\\(\\frac{d}{dx} \\sigma(ax) = a \\cdot \\sigma(ax) \\cdot (1-\\sigma(ax)) \\tag{D}\\)</p>

    <p>We will be using the above result a lot, so make sure you understand it. If it is not clear, have a look at this <a href="http://kawahara.ca/how-to-compute-the-derivative-of-a-sigmoid-function-fully-worked-example/" target="_blank" style="color: blue; text-decoration: underline;">post</a>.</p>

    <p>To compute the gradients, we will start with the simplest case and increase the complexity gradually. To keep things simple we will complete it in 7 parts:</p>

    <ol>
      <li><a href="https://github.com/anujgupta82/anujgupta82.github.io_old/blob/master/_posts/2016-08-26-gradients-1.markdown" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (scalar)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" style="color: blue; text-decoration: underline;">1 layer network, 1 training example (vector)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" style="color: blue; text-decoration: underline;">1 layer network, batch training (&gt;1 training examples where each is a vector)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" style="color: blue; text-decoration: underline;">2 layer network with 1 node hidden layer, 1 training example (vector)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network with 2 node hidden layer, 1 training example (vector)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">2 layer network, batch training (&gt;1 training examples where each is a vector)</a></li>
      <li><a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" style="color: blue; text-decoration: underline;">Generalization and take home</a></li>
    </ol>

    <br>
    <a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Next</a>
  `,
},
    {
  id: 2,
  title: "Gradients - Part 1",
  date: "Aug 26, 2016",
  excerpt: "Part 1 of computing gradients for training Neural Nets",
  content: `
    <h2><strong>1 layer network, 1 training example (scalar)</strong></h2>
    <br>
    <p>Consider a simplest version of a neural net - 1 layer, 1 input node (scalar)</p>
    <img src="/images/NN_1_1.jpeg" height="200" width="270" alt="Neural Network diagram"/>
    <div class="thecap">Simple neural net</div>
    
    <p>Input is (x,y): x, y both are scalars. (Later on everything will be a matrix, so just to be using same notation. We will abuse the notation to express scalars as matrix of dimension 1 \\(\\times\\) 1). Thus, in matrix form x,y are \\([X]_{1\\times 1}\\) and \\([y]_{1\\times 1}\\). Let W be weight matrix. In this case it's \\([W]_{1\\times 1}\\)</p>
    
    <p>Let \\(\\hat{y}\\) be the predicted output. Then:</p>
    <p>
    \\(\\begin{align}
    \\hat{y} = \\sigma(Wx) = \\frac{1}{1 + e^{-[X] \\cdot [W]}} \\tag{0} 
    \\end{align}\\)
    </p>
    
    <p>Let loss be squared error loss. For ease of maths we take \\(\\frac{1}{2}\\) of it:</p>
    
    <p>
    \\(\\begin{align}
    L = \\frac{1}{2}(y - \\hat{y})^2
    \\end{align}\\)
    </p>
    
    <p>Let's compute gradients: \\( \\frac{\\partial L}{\\partial W} \\)</p>
    <br>
    
    <p>
    \\(\\begin{align}
  \\frac{\\partial L}{\\partial W} & = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial W} \\tag{1}\\\\
  \\frac{\\partial L}{\\partial \\hat{y}} &= \\frac{1}{2} \\times 2 \\times (y - \\hat{y})^{1} \\times (-1) \\tag{2}\\\\
  \\frac{\\partial \\hat{y}}{\\partial W} &= \\left(\\frac{1}{1 + e^{-[X] . [W]}}\\right) \\times \\left(1- \\frac{1}{1 + e^{-[X] . [W]}}\\right) * X \\tag{3}\\\\
  & = \\sigma (Wx) \\times (1- \\sigma (Wx)) * X \\\\
  & = \\hat{y} \\times (1 - \\hat{y}) * X \\tag{4}\\\\
  \\end{align}\\)
    </p>
    <br>
    
    <p>Substituting (2) & (3) in (4), we get:</p>
    <br>
    
    <p>
    \\(\\begin{align}
    \\frac{\\partial L}{\\partial W} &= \\left(-(y - \\hat{y})\\right) \\times \\left(\\hat{y} \\times (1 - \\hat{y}) \\times x\\right) \\\\
    &= -(y - \\hat{y}) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x \\\\
    &= (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x \\tag{5} 
   \\end{align}\\)
    </p>
    <br>
    
    <p>Let:
      \\(\\begin{align}
       (\\Delta l_1 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\tag{6}
       
      \\end{align} \\)
      </p>

    <p>Then, eq (4)reduces to:
    \\(\\begin{align}
    \\frac{\\partial L}{\\partial W} &= \\Delta l_1 \\times x \\\\
    &= \\Delta l_1 \\ast X \\\\
    &= [X^T] \\cdot \\Delta l_1 \\tag{7} 
    \\end{align}\\)
    </p>
    
    <br>
    <a href="https://anujgupta82.github.io/2016/08/26/gradients-0/" class="btn btn-primary" style="color: blue;">Prev</a>
    <a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" class="btn btn-primary" style="color: blue;">Next</a>
  `
}
,

{
  id: 3,
  title: "Gradients - Part 2",
  date: "Aug 28, 2016",
  excerpt: "Part 2 of computing gradients for training Neural Nets",
  content: `
    <h2><strong>1 layer network, 1 input (vector)</strong></h2>
    <br>
    <p>Our neural net still has 1 layer, but now the input is a vector.</p>
    <img src="${NN_2_2}" height="200" width="270" alt="Neural Network diagram"/>
    <div class="thecap">Neural net with 1 layer, but input is vector</div>
    
    <p>Input is \\((\\vec{X},y)\\): \\(\\vec{X}\\) is a vector, while y is a scalar.</p>
    <br>
    
    <p>\\(X = [x^1 ~~x^2 ~~x^3]\\) where \\(x^i = i^{th}\\) component of \\(\\vec{X}\\).</p>
    <br>
    
    <p>Thus, in matrix form x,y are \\([X]_{1\\times 3}\\) and \\([y]_{1\\times 1}\\). W, weight matrix is \\([W]_{3\\times 1}\\)</p>
    <br>
    
    <p>\\(W = \\begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \\end{bmatrix}\\)</p>
    <br>
    
    <p>Let \\(\\hat{y}\\) be predicted output. In matrix format, \\([\\hat{y}]_{1\\times 1}\\)</p>
    <br>
    
    <p>\\(\\begin{align}
    \\hat{y} &= \\sigma([X] \\cdot [W]) \\tag{10.1} \\\\
    &= \\frac{1}{1 + e^{-[X] \\cdot [W]}} \\tag{10.2}  \\\\
    &= \\frac{1}{1 + e^{-(x^1 w_1 + x^2 w_2 + x^3 w_3)}} \\tag{10.3}
    \\end{align}\\)</p>
    <br>
    
    <p>Like before, we will use half of squared error loss:</p>
    <p>\\(L = \\frac{1}{2}(y - \\hat{y})^2\\)</p>
    
    <p>Let's first compute gradients:</p>
    <br>
    
    <p>\\(\\begin{equation}
    \\nabla_W L = \\frac{\\partial L}{\\partial W} = \\begin{bmatrix}
    \\frac{\\partial L}{\\partial w_1} \\\\
    \\frac{\\partial L}{\\partial w_2} \\\\
    \\frac{\\partial L}{\\partial w_3}
    \\end{bmatrix} \\tag{11} 
    \\end{equation}\\)</p>
    <br>
    
    <p>So, let's compute \\(\\frac{\\partial L}{\\partial w_1}\\):</p>
    <br>
    
    <p>\\(\\begin{align}
    \\frac{\\partial L}{\\partial w_1} &= \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial w_1} \\tag{12}  \\\\[0.5em]
    \\frac{\\partial L}{\\partial \\hat{y}} &= \\frac{1}{2} \\times 2 \\times (y - \\hat{y})^1 \\times (-1) \\\\
    &= -(y - \\hat{y}) \\tag{13} \\\\[0.5em]
    \\frac{\\partial \\hat{y}}{\\partial w_1} &= \\left(\\frac{1}{1 + e^{-[X] \\cdot [W]}}\\right) \\times \\left(1 - \\frac{1}{1 + e^{-[X] \\cdot [W]}}\\right) \\times x_1 \\\\
    &\\qquad \\text{using } (10.2) \\text{ & } (10.3) \\tag{14}  \\\\
    &= \\sigma([X] \\cdot [W]) \\times (1 - \\sigma([X] \\cdot [W])) \\times x_1 \\\\
    &\\qquad \\text{using } (10.1) \\tag{15}  \\\\
    &= \\hat{y} \\times (1 - \\hat{y}) \\times x_1 \\\\
    &\\qquad \\text{using } using(10.1) \\tag{16} 
    \\end{align}\\)</p>
    <br>
    
    <p>Substituting (13) & (16) in (12), we get:</p>
    
    <p>\\(\\begin{align}
    \\frac{\\partial L}{\\partial w_1} &= \\left(-(y - \\hat{y})\\right) \\times \\left(\\hat{y} \\times (1 - \\hat{y}) \\times x_1\\right) \\\\
    &= -(y - \\hat{y}) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_1 \\\\
    &= (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_1
    \\end{align}\\)</p>
    
    <p>Thus, in general:</p>
    <p>\\(\\frac{\\partial L}{\\partial w_i} = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_i \\tag{17} \\)</p>
    
    <p>Using (17) in (11):</p>
    <br>
    
    <p>\\(\\begin{equation}
    \\frac{\\partial L}{\\partial W} = \\begin{bmatrix}
    (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_1 \\\\
    (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_2 \\\\
    (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times x_3
    \\end{bmatrix} \\tag{18} 
    \\end{equation}\\)</p>
    <br>
    
    <p>\\(\\begin{equation}
    = \\begin{bmatrix}
    x^1 \\\\
    x^2 \\\\
    x^3
    \\end{bmatrix} \\times [(\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y})] \\tag{19} 
    \\end{equation}\\)</p>
    
    <p>Let:</p>
    <p>\\(\\Delta l_1 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\tag{20} \\)</p>
    
    <p>Using (20) in (19):</p>
    <p>\\(\\frac{\\partial L}{\\partial W} = [X^T] \\cdot \\Delta l_1\\)</p>
    
    <br>
    <a href="https://anujgupta82.github.io/2016/08/26/gradients-1/" class="btn btn-primary" style="color: blue;">Prev</a>
    <a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" class="btn btn-primary" style="color: blue;">Next</a>
  `
},

{
  id: 4,
  title: "Gradients - Part 3",
  date: "Aug 30, 2016",
  excerpt: "Part 3 of computing gradients for training Neural Nets",
  content: `
    <h2><strong>1 layer network, multiple training examples (each example is a vector)</strong></h2>
    <p>Multiple training examples correspond to the scenario of batch training. Each input is still a vector. Our neural net still has 1 layer. For simplicity, assume we have 4 examples, each having 3 components.</p>

    <img src="${NN_2_2}" height="200" width="270" alt="Neural Network diagram"/><br>
    <div class="thecap">Neural net with 1 layer, multiple vector inputs</div>

    <h3><strong>Weights</strong></h3>
    <p>The weight matrix \\(W\\) is \\([W]_{3\\times 1}\\):</p>
    <p>\\[W = \\begin{bmatrix} w_1 \\\\ w_2 \\\\ w_3 \\end{bmatrix}\\]</p>

    <h3><strong>Inputs and Outputs</strong></h3>
    <p>Input \\(X\\) is now a matrix \\([X]_{4 \\times 3}\\). \\(X_i\\) represents the \\(i^{th}\\) training example, and \\(x_{i}^{j}\\) is the \\(j^{th}\\) feature of the \\(i^{th}\\) example.</p>
    
    <p>\\[X = \\begin{bmatrix}
    x_1^1 & x_1^2 & x_1^3 \\\\
    x_2^1 & x_2^2 & x_2^3 \\\\
    x_3^1 & x_3^2 & x_3^3 \\\\
    x_4^1 & x_4^2 & x_4^3
    \\end{bmatrix}\\]</p>

    <p>The true labels vector \\(\\vec{y}\\) is:</p>
    <p>\\[\\vec{y} = \\begin{bmatrix} y_1 \\\\ y_2 \\\\ y_3 \\\\ y_4 \\end{bmatrix}\\]</p>
    
    <p>where \\(y_i\\) is the true label for the \\(i^{th}\\) training example.</p>

    <p>The predicted outputs vector \\(\\vec{\\hat{y}}\\) has components \\(\\hat{y}_i\\) computed as:</p>
    <p>\\[\\hat{y}_i = \\sigma(x_{i}^{1} w_1 + x_{i}^{2} w_2 + x_{i}^{3} w_3) = \\frac{1}{1+e^{-(x_{i}^{1} w_1 + x_{i}^{2} w_2 + x_{i}^{3} w_3)}} \\tag{1}\\]</p>

    <h3><strong>Loss Function</strong></h3>
    <p>We use the sum of squared errors across all training examples:</p>
    <p>\\[L = \\sum_{i=1}^{4} \\frac{1}{2}(y_i - \\hat{y}_i)^2 \\tag{2}\\]</p>

    <h3><strong>Gradient Computation</strong></h3>
    <p>The gradient of the loss with respect to the weight matrix is:</p>
    <p>\\[\\nabla_W L = \\frac{\\partial L}{\\partial W} = \\begin{bmatrix}
    \\frac{\\partial L}{\\partial w_1} \\\\
    \\frac{\\partial L}{\\partial w_2} \\\\
    \\frac{\\partial L}{\\partial w_3}
    \\end{bmatrix} \\tag{3}\\]</p>

    <h4><strong>Computing \\(\\frac{\\partial L}{\\partial w_1}\\)</strong></h4>
    <p>Using the chain rule:</p>
    <p>\\[\\begin{align}
    \\frac{\\partial L}{\\partial w_1} &= \\frac{\\partial}{\\partial w_1} \\left(\\sum_{i=1}^{4} \\frac{1}{2}(y_i - \\hat{y}_i)^2\\right) \\\\
    &= \\sum_{i=1}^{4} \\frac{\\partial}{\\partial w_1} \\left(\\frac{1}{2}(y_i - \\hat{y}_i)^2\\right) \\\\
    &= \\sum_{i=1}^{4} \\frac{\\partial L_i}{\\partial \\hat{y}_i} \\cdot \\frac{\\partial \\hat{y}_i}{\\partial w_1} \\tag{4}
    \\end{align}\\]</p>

    <p>where \\(L_i = \\frac{1}{2}(y_i - \\hat{y}_i)^2\\) is the loss for the \\(i^{th}\\) example.</p>

    <h4><strong>Computing the partial derivatives</strong></h4>
    <p>First component - derivative of loss with respect to prediction:</p>
    <p>\\[\\frac{\\partial L_i}{\\partial \\hat{y}_i} = \\frac{\\partial}{\\partial \\hat{y}_i}\\left(\\frac{1}{2}(y_i - \\hat{y}_i)^2\\right) = -(y_i - \\hat{y}_i) = (\\hat{y}_i - y_i) \\tag{5}\\]</p>

    <p>Second component - derivative of sigmoid with respect to weight:</p>
    <p>\\[\\begin{align}
    \\frac{\\partial \\hat{y}_i}{\\partial w_1} &= \\frac{\\partial}{\\partial w_1}\\left(\\frac{1}{1+e^{-(x_{i}^{1} w_1 + x_{i}^{2} w_2 + x_{i}^{3} w_3)}}\\right) \\\\
    &= \\sigma(z_i) \\cdot (1 - \\sigma(z_i)) \\cdot x_{i}^{1} \\\\
    &= \\hat{y}_i \\cdot (1 - \\hat{y}_i) \\cdot x_{i}^{1} \\tag{6}
    \\end{align}\\]</p>
    
    <p>where \\(z_i = x_{i}^{1} w_1 + x_{i}^{2} w_2 + x_{i}^{3} w_3\\)</p>

    <h4><strong>Combining the results</strong></h4>
    <p>Substituting equations (5) and (6) into equation (4):</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1} = \\sum_{i=1}^{4} (\\hat{y}_i - y_i) \\cdot \\hat{y}_i \\cdot (1 - \\hat{y}_i) \\cdot x_{i}^{1} \\tag{7}\\]</p>

    <p>Let's define the error term for each example:</p>
    <p>\\[\\delta_i = (\\hat{y}_i - y_i) \\cdot \\hat{y}_i \\cdot (1 - \\hat{y}_i) \\tag{8}\\]</p>

    <p>Then:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1} = \\sum_{i=1}^{4} \\delta_i \\cdot x_{i}^{1} = \\delta_1 x_1^1 + \\delta_2 x_2^1 + \\delta_3 x_3^1 + \\delta_4 x_4^1 \\tag{9}\\]</p>

    <h4><strong>General form for all weights</strong></h4>
    <p>Similarly, for the other weights:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_2} = \\sum_{i=1}^{4} \\delta_i \\cdot x_{i}^{2} = \\delta_1 x_1^2 + \\delta_2 x_2^2 + \\delta_3 x_3^2 + \\delta_4 x_4^2 \\tag{10}\\]</p>
    
    <p>\\[\\frac{\\partial L}{\\partial w_3} = \\sum_{i=1}^{4} \\delta_i \\cdot x_{i}^{3} = \\delta_1 x_1^3 + \\delta_2 x_2^3 + \\delta_3 x_3^3 + \\delta_4 x_4^3 \\tag{11}\\]</p>

    <h4><strong>Matrix form</strong></h4>
    <p>The complete gradient can be written as:</p>
    <p>\\[\\frac{\\partial L}{\\partial W} = \\begin{bmatrix}
    \\delta_1 x_1^1 + \\delta_2 x_2^1 + \\delta_3 x_3^1 + \\delta_4 x_4^1 \\\\
    \\delta_1 x_1^2 + \\delta_2 x_2^2 + \\delta_3 x_3^2 + \\delta_4 x_4^2 \\\\
    \\delta_1 x_1^3 + \\delta_2 x_2^3 + \\delta_3 x_3^3 + \\delta_4 x_4^3
    \\end{bmatrix} \\tag{12}\\]</p>

    <p>This can be expressed as a matrix multiplication:</p>
    <p>\\[\\frac{\\partial L}{\\partial W} = \\begin{bmatrix}
    x_1^1 & x_2^1 & x_3^1 & x_4^1 \\\\
    x_1^2 & x_2^2 & x_3^2 & x_4^2 \\\\
    x_1^3 & x_2^3 & x_3^3 & x_4^3
    \\end{bmatrix} \\begin{bmatrix}
    \\delta_1 \\\\
    \\delta_2 \\\\
    \\delta_3 \\\\
    \\delta_4
    \\end{bmatrix} \\tag{13}\\]</p>

    <p><strong>Final Result:</strong></p>
    <p>\\[\\boxed{\\frac{\\partial L}{\\partial W} = X^T \\boldsymbol{\\delta}} \\tag{14}\\]</p>
    
    <p>where \\(\\boldsymbol{\\delta} = [\\delta_1, \\delta_2, \\delta_3, \\delta_4]^T\\) is the vector of error terms.</p>

    <h4><strong>Summary</strong></h4>
    <p>For batch training with multiple examples:</p>
    <ol>
      <li>Compute predictions: \\(\\hat{y}_i = \\sigma(X_i \\cdot W)\\) for each example</li>
      <li>Compute error terms: \\(\\delta_i = (\\hat{y}_i - y_i) \\cdot \\hat{y}_i \\cdot (1 - \\hat{y}_i)\\)</li>
      <li>Compute gradient: \\(\\frac{\\partial L}{\\partial W} = X^T \\boldsymbol{\\delta}\\)</li>
    </ol>

    <br/>
    <p>In the <a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" target="_blank" style="color: blue;">next post</a> we'll explore gradients for networks with hidden layers.</p>

    <p>
      <a href="https://anujgupta82.github.io/2016/08/28/gradients-2/" target="_blank" style="color: blue;">Prev</a> |
      <a href="https://anujgupta82.github.io/2016/09/04/gradients-4-1/" target="_blank" style="color: blue;">Next</a>
    </p>
  `
},


{
  id: 5,
  title: "Gradients - Part 4a",
  date: "Sep 9, 2016",
  excerpt: "Part 4 of computing gradients for training Neural Nets",
  content: `
    <h2><strong>2 Layer Network, Single Training Example (Vector)</strong></h2>
    <p>In this post we will consider 2 types of networks. In the first network, the hidden layer has only 1 node while in the <a href="https://anujgupta82.github.io/pages/blog-post" target="_blank" style="color: blue; text-decoration: underline;">second network</a>, the hidden layer has more than 1 node. Let's start with the case of a hidden layer with only 1 node. This part is a bit lengthy, but fundamentally not very different from earlier parts. Keep calm and read on :-)</p>

    <h2><strong>1 Hidden Layer with 1 Node</strong></h2>
    <img src="${NN_4_1}" height="200" width="270" alt="Neural Network diagram"/>
    <div class="thecap">Neural net with 2 layers, 1 node in hidden layer. Input is a vector.</div>

    <h3><strong>Network Architecture</strong></h3>
    
    <h4><strong>Layer 1 (Input to Hidden)</strong></h4>
    <p>The first layer has weight matrix \\([W_1]_{3 \\times 1}\\):</p>
    <p>\\[W_1 = \\begin{bmatrix} w_1^1 \\\\ w_1^2 \\\\ w_1^3 \\end{bmatrix}\\]</p>

    <h4><strong>Layer 2 (Hidden to Output)</strong></h4>
    <p>The second layer has weight matrix \\([W_2]_{1 \\times 1}\\), which is a scalar:</p>
    <p>\\[W_2 = [w_2]\\]</p>

    <h3><strong>Input & Output Definitions</strong></h3>
    <p>Input is \\((\\vec{X}, y)\\): \\(\\vec{X}\\) is a vector, while \\(y\\) is a scalar.</p>
    <p>\\[X = [x^1 ~~x^2 ~~x^3]\\]</p>
    <p>where \\(x^i\\) is the \\(i^{th}\\) component of \\(\\vec{X}\\).</p>
    <p>In matrix form: \\([X]_{1\\times 3}\\) and \\([y]_{1\\times 1}\\)</p>

    <h4><strong>Hidden Layer Output</strong></h4>
    <p>Let \\(l_1\\) be the output of layer 1. In matrix format: \\([l_1]_{1\\times 1}\\)</p>
    <p>\\[\\begin{align}
    l_1 &= \\sigma([X] \\cdot [W_1]) \\tag{1} \\\\
    &= \\frac{1}{1 + e^{-[X] \\cdot [W_1]}} \\tag{2} \\\\
    &= \\frac{1}{1 + e^{-(x^1 \\times w_1^1 + x^2 \\times w_1^2 + x^3 \\times w_1^3)}} \\tag{3}
    \\end{align}\\]</p>

    <h4><strong>Final Output</strong></h4>
    <p>\\(\\hat{y}\\) is the predicted output. In matrix format: \\([\\hat{y}]_{1\\times 1}\\)</p>
    <p>\\[\\begin{align}
    \\hat{y} &= \\sigma([l_1] \\cdot [W_2]) \\tag{4} \\\\
    &= \\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}} \\tag{5} \\\\
    &= \\frac{1}{1 + e^{-(l_1 \\cdot w_2)}} \\tag{6}
    \\end{align}\\]</p>

    <h3><strong>Loss Function</strong></h3>
    <p>Like before, we will use half of the squared error loss:</p>
    <p>\\[L = \\frac{1}{2}(y - \\hat{y})^2 \\tag{7}\\]</p>

    <h3><strong>Gradient Computations</strong></h3>
    <p>There are 2 sets of gradients to compute: \\(\\nabla_{W_1} L\\) and \\(\\nabla_{W_2} L\\). Let us first compute \\(\\nabla_{W_2} L\\).</p>

    <h4><strong>Computing \\(\\nabla_{W_2} L\\)</strong></h4>
    <p>\\([\\nabla_{W_2} L]_{1\\times 1}\\) (This is a scalar)</p>

    <p>Using the chain rule:</p>
    <p>\\[\\frac{\\partial L}{\\partial W_2} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial W_2} \\tag{8}\\]</p>

    <p><strong>First component:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial \\hat{y}} = \\frac{\\partial}{\\partial \\hat{y}}\\left(\\frac{1}{2}(y - \\hat{y})^2\\right) = -(y - \\hat{y}) = (\\hat{y} - y) \\tag{9}\\]</p>

    <p><strong>Second component:</strong></p>
    <p>\\[\\begin{align}
    \\frac{\\partial \\hat{y}}{\\partial W_2} &= \\frac{\\partial}{\\partial W_2}\\left(\\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}}\\right) \\\\
    &= \\sigma([l_1] \\cdot [W_2]) \\times (1 - \\sigma([l_1] \\cdot [W_2])) \\times l_1 \\tag{10} \\\\
    &= \\hat{y} \\times (1 - \\hat{y}) \\times l_1 \\tag{11}
    \\end{align}\\]</p>

    <p><strong>Combining the results:</strong></p>
    <p>\\[\\begin{align}
    \\frac{\\partial L}{\\partial W_2} &= (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times l_1 \\tag{12}
    \\end{align}\\]</p>

    <p>Let's define:</p>
    <p>\\[\\Delta l_2 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\tag{13}\\]</p>

    <p>Then:</p>
    <p>\\[\\boxed{\\frac{\\partial L}{\\partial W_2} = \\Delta l_2 \\times l_1 = [l_1]^T \\cdot \\Delta l_2} \\tag{14}\\]</p>

    <h4><strong>Computing \\(\\nabla_{W_1} L\\)</strong></h4>
    <p>\\([\\nabla_{W_1} L]_{3\\times 1}\\)</p>

    <p>\\[\\nabla_{W_1} L = \\frac{\\partial L}{\\partial W_1} = \\begin{bmatrix}
    \\frac{\\partial L}{\\partial w_1^1} \\\\
    \\frac{\\partial L}{\\partial w_1^2} \\\\
    \\frac{\\partial L}{\\partial w_1^3}
    \\end{bmatrix} \\tag{15}\\]</p>

    <p>First, let's compute \\(\\frac{\\partial L}{\\partial w_1^1}\\) using the chain rule:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^1} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial l_1} \\times \\frac{\\partial l_1}{\\partial w_1^1} \\tag{16}\\]</p>

    <p><strong>We already know:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial \\hat{y}} = (\\hat{y} - y) \\tag{17}\\]</p>

    <p><strong>Computing \\(\\frac{\\partial \\hat{y}}{\\partial l_1}\\):</strong></p>
    <p>\\[\\begin{align}
    \\frac{\\partial \\hat{y}}{\\partial l_1} &= \\frac{\\partial}{\\partial l_1}\\left(\\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}}\\right) \\\\
    &= \\sigma([l_1] \\cdot [W_2]) \\times (1 - \\sigma([l_1] \\cdot [W_2])) \\times w_2 \\tag{18} \\\\
    &= \\hat{y} \\times (1 - \\hat{y}) \\times w_2 \\tag{19}
    \\end{align}\\]</p>

    <p><strong>Computing \\(\\frac{\\partial l_1}{\\partial w_1^1}\\):</strong></p>
    <p>\\[\\begin{align}
    \\frac{\\partial l_1}{\\partial w_1^1} &= \\frac{\\partial}{\\partial w_1^1}\\left(\\frac{1}{1 + e^{-[X] \\cdot [W_1]}}\\right) \\\\
    &= \\sigma([X] \\cdot [W_1]) \\times (1 - \\sigma([X] \\cdot [W_1])) \\times x^1 \\tag{20} \\\\
    &= l_1 \\times (1 - l_1) \\times x^1 \\tag{21}
    \\end{align}\\]</p>

    <p><strong>Combining all components:</strong></p>
    <p>\\[\\begin{align}
    \\frac{\\partial L}{\\partial w_1^1} &= (\\hat{y} - y) \\times [\\hat{y} \\times (1 - \\hat{y}) \\times w_2] \\times [l_1 \\times (1 - l_1) \\times x^1] \\\\
    &= [(\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times w_2] \\times [l_1 \\times (1 - l_1)] \\times x^1 \\\\
    &= [\\Delta l_2 \\times w_2] \\times [l_1 \\times (1 - l_1)] \\times x^1 \\tag{22}
    \\end{align}\\]</p>

    <p>Let's define the error term for the hidden layer:</p>
    <p>\\[\\Delta l_1 = \\Delta l_2 \\times w_2 \\times l_1 \\times (1 - l_1) \\tag{23}\\]</p>

    <p>Then:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^1} = \\Delta l_1 \\times x^1 \\tag{24}\\]</p>

    <p><strong>Similarly for other weights:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^2} = \\Delta l_1 \\times x^2 \\tag{25}\\]</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^3} = \\Delta l_1 \\times x^3 \\tag{26}\\]</p>

    <p><strong>Complete gradient:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial W_1} = \\begin{bmatrix}
    \\Delta l_1 \\times x^1 \\\\
    \\Delta l_1 \\times x^2 \\\\
    \\Delta l_1 \\times x^3
    \\end{bmatrix} \\tag{27}\\]</p>

    <p>This can be written in matrix form as:</p>
    <p>\\[\\boxed{\\frac{\\partial L}{\\partial W_1} = [X]^T \\cdot \\Delta l_1} \\tag{28}\\]</p>

    <h3><strong>Backpropagation Algorithm Summary</strong></h3>
    <p>The key insight of backpropagation is that errors propagate backwards through the network:</p>
    
    <ol>
      <li><strong>Forward Pass:</strong>
        <ul>
          <li>Compute \\(l_1 = \\sigma(X \\cdot W_1)\\)</li>
          <li>Compute \\(\\hat{y} = \\sigma(l_1 \\cdot W_2)\\)</li>
        </ul>
      </li>
      <li><strong>Backward Pass:</strong>
        <ul>
          <li>Compute output layer error: \\(\\Delta l_2 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y})\\)</li>
          <li>Compute hidden layer error: \\(\\Delta l_1 = \\Delta l_2 \\times w_2 \\times l_1 \\times (1 - l_1)\\)</li>
        </ul>
      </li>
      <li><strong>Compute Gradients:</strong>
        <ul>
          <li>\\(\\frac{\\partial L}{\\partial W_2} = \\Delta l_2 \\times l_1\\)</li>
          <li>\\(\\frac{\\partial L}{\\partial W_1} = X^T \\cdot \\Delta l_1\\)</li>
        </ul>
      </li>
    </ol>

    <h4><strong>Key Pattern</strong></h4>
    <p>Notice the pattern: <strong>\\(\\Delta l_1 = \\Delta l_2 \\times w_2 \\times \\text{(local gradient)}\\)</strong></p>
    <p>This shows how the error from the output layer (\\(\\Delta l_2\\)) gets propagated back to the hidden layer, scaled by the connecting weight (\\(w_2\\)) and the local gradient of the activation function.</p>

    <br/>
    <p>In the <a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" target="_blank" style="color: blue;">next post</a> we'll explore gradients for networks with multiple nodes in the hidden layer.</p>

    <p>
      <a href="https://anujgupta82.github.io/2016/08/30/gradients-3/" target="_blank" style="color: blue;">Prev</a> |
      <a href="https://anujgupta82.github.io/2016/09/11/gradients-4-2/" target="_blank" style="color: blue;">Next</a>
    </p>
  `
},
    {
  id: 6,
  title: "Gradients - Part 4b",
  date: "Sep 11, 2016",
  excerpt: "Part 4 of computing gradients for training Neural Nets",
  content: `
    <h2><strong>2 Layer Network, Single Training Example (Vector)</strong></h2>
    <p>This is in continuation of the <a href="https://anujgupta82.github.io/pages/blog-post" target="_blank" style="color: blue; text-decoration: underline;">last post</a> where we derived gradients for a 2-layer network where the hidden layer has only 1 node.</p>

    <h3><strong>1 Hidden Layer with ≥ 2 Nodes</strong></h3>
    <p>We will derive gradients for a hidden layer with 2 nodes. Extension to 3 or more nodes is straightforward.</p>
    
    <img src="${NN_4_2}" height="200" width="270" alt="Neural Network diagram"/>
    <div class="thecap">Neural net with 2 layers, 2 nodes in hidden layer. Input is a vector.</div>

    <h3><strong>Network Architecture</strong></h3>
    
    <h4><strong>Layer 1 (Input to Hidden)</strong></h4>
    <p>The first layer has weight matrix \\([W_1]_{3 \\times 2}\\):</p>
    <p>\\[W_1 = \\begin{bmatrix} 
    w_1^{11} & w_1^{12} \\\\
    w_1^{21} & w_1^{22} \\\\
    w_1^{31} & w_1^{32}
    \\end{bmatrix}\\]</p>
    
    <p>where \\(w_1^{ij}\\) represents the weight from input node \\(i\\) to hidden node \\(j\\).</p>

    <h4><strong>Layer 2 (Hidden to Output)</strong></h4>
    <p>The second layer has weight matrix \\([W_2]_{2 \\times 1}\\):</p>
    <p>\\[W_2 = \\begin{bmatrix} w_2^1 \\\\ w_2^2 \\end{bmatrix}\\]</p>

    <h3><strong>Input & Output Definitions</strong></h3>
    <p>Exactly the same as the previous setting. Input is \\((\\vec{X}, y)\\): \\(\\vec{X}\\) is a vector, while \\(y\\) is a scalar.</p>
    <p>\\[X = [x^1 ~~x^2 ~~x^3]\\]</p>
    <p>where \\(x^i\\) is the \\(i^{th}\\) component of \\(\\vec{X}\\).</p>
    <p>In matrix form: \\([X]_{1\\times 3}\\) and \\([y]_{1\\times 1}\\)</p>

    <h4><strong>Hidden Layer Output</strong></h4>
    <p>Let \\(l_1\\) be the output of layer 1 (hidden layer). In matrix format: \\([l_1]_{1\\times 2}\\)</p>
    <p>\\[l_1 = \\sigma([X] \\cdot [W_1]) \\tag{1}\\]</p>
    
    <p>\\(l_1\\) has 2 components - \\(l_1^1\\) and \\(l_1^2\\), given by:</p>
    <p>\\[l_1 = [l_1^1 ~~l_1^2] \\tag{2}\\]</p>
    
    <p>\\[l_1^1 = \\frac{1}{1 + e^{-(x^1 \\times w_1^{11} + x^2 \\times w_1^{21} + x^3 \\times w_1^{31})}} \\tag{3}\\]</p>
    
    <p>\\[l_1^2 = \\frac{1}{1 + e^{-(x^1 \\times w_1^{12} + x^2 \\times w_1^{22} + x^3 \\times w_1^{32})}} \\tag{4}\\]</p>

    <h4><strong>Final Output</strong></h4>
    <p>Let \\(\\hat{y}\\) be the predicted output. It is also the output of layer 2. In matrix format: \\([\\hat{y}]_{1\\times 1}\\)</p>
    <p>\\[\\begin{align}
    \\hat{y} &= \\sigma([l_1] \\cdot [W_2]) \\tag{5} \\\\
    &= \\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}} \\tag{6} \\\\
    &= \\frac{1}{1 + e^{-(l_1^1 w_2^1 + l_1^2 w_2^2)}} \\tag{7}
    \\end{align}\\]</p>

    <h3><strong>Loss Function</strong></h3>
    <p>Like before, we will use half of the squared error loss:</p>
    <p>\\[L = \\frac{1}{2}(y - \\hat{y})^2 \\tag{8}\\]</p>

    <h3><strong>Gradient Computations</strong></h3>
    <p>There are 2 sets of gradients to compute: \\(\\nabla_{W_1} L\\) and \\(\\nabla_{W_2} L\\). Let us first compute \\(\\nabla_{W_2} L\\).</p>

    <h4><strong>Computing \\(\\nabla_{W_2} L\\)</strong></h4>
    <p>\\([\\nabla_{W_2} L]_{2\\times 1}\\)</p>

    <p>\\[\\nabla_{W_2} L = \\frac{\\partial L}{\\partial W_2} = \\begin{bmatrix}
    \\frac{\\partial L}{\\partial w_2^1} \\\\
    \\frac{\\partial L}{\\partial w_2^2}
    \\end{bmatrix} \\tag{9}\\]</p>

    <p><strong>Computing \\(\\frac{\\partial L}{\\partial w_2^1}\\):</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_2^1} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial w_2^1} \\tag{10}\\]</p>

    <p>We know:</p>
    <p>\\[\\frac{\\partial L}{\\partial \\hat{y}} = -(y - \\hat{y}) = (\\hat{y} - y) \\tag{11}\\]</p>

    <p>\\[\\begin{align}
    \\frac{\\partial \\hat{y}}{\\partial w_2^1} &= \\frac{\\partial}{\\partial w_2^1}\\left(\\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}}\\right) \\\\
    &= \\sigma([l_1] \\cdot [W_2]) \\times (1 - \\sigma([l_1] \\cdot [W_2])) \\times l_1^1 \\tag{12} \\\\
    &= \\hat{y} \\times (1 - \\hat{y}) \\times l_1^1 \\tag{13}
    \\end{align}\\]</p>

    <p>Combining:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_2^1} = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\times l_1^1 \\tag{14}\\]</p>

    <p>Let's define:</p>
    <p>\\[\\Delta l_2 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\tag{15}\\]</p>

    <p>Then:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_2^1} = \\Delta l_2 \\times l_1^1 \\tag{16}\\]</p>

    <p><strong>Similarly:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_2^2} = \\Delta l_2 \\times l_1^2 \\tag{17}\\]</p>

    <p><strong>Complete gradient for \\(W_2\\):</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial W_2} = \\begin{bmatrix}
    \\Delta l_2 \\times l_1^1 \\\\
    \\Delta l_2 \\times l_1^2
    \\end{bmatrix} = \\begin{bmatrix} l_1^1 \\\\ l_1^2 \\end{bmatrix} \\times \\Delta l_2\\]</p>

    <p>\\[\\boxed{\\frac{\\partial L}{\\partial W_2} = [l_1]^T \\cdot \\Delta l_2} \\tag{18}\\]</p>

    <h4><strong>Computing \\(\\nabla_{W_1} L\\)</strong></h4>
    <p>\\([\\nabla_{W_1} L]_{3\\times 2}\\)</p>

    <p>\\[\\nabla_{W_1} L = \\frac{\\partial L}{\\partial W_1} = \\begin{bmatrix}
    \\frac{\\partial L}{\\partial w_1^{11}} & \\frac{\\partial L}{\\partial w_1^{12}} \\\\
    \\frac{\\partial L}{\\partial w_1^{21}} & \\frac{\\partial L}{\\partial w_1^{22}} \\\\
    \\frac{\\partial L}{\\partial w_1^{31}} & \\frac{\\partial L}{\\partial w_1^{32}}
    \\end{bmatrix} \\tag{19}\\]</p>

    <p><strong>Computing \\(\\frac{\\partial L}{\\partial w_1^{11}}\\) (weight to first hidden node):</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{11}} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial l_1^1} \\times \\frac{\\partial l_1^1}{\\partial w_1^{11}} \\tag{20}\\]</p>

    <p>We know:</p>
    <p>\\[\\frac{\\partial L}{\\partial \\hat{y}} = (\\hat{y} - y) \\tag{21}\\]</p>

    <p>\\[\\begin{align}
    \\frac{\\partial \\hat{y}}{\\partial l_1^1} &= \\frac{\\partial}{\\partial l_1^1}\\left(\\frac{1}{1 + e^{-[l_1] \\cdot [W_2]}}\\right) \\\\
    &= \\hat{y} \\times (1 - \\hat{y}) \\times w_2^1 \\tag{22}
    \\end{align}\\]</p>

    <p>\\[\\begin{align}
    \\frac{\\partial l_1^1}{\\partial w_1^{11}} &= \\frac{\\partial}{\\partial w_1^{11}}\\left(\\frac{1}{1 + e^{-(x^1 w_1^{11} + x^2 w_1^{21} + x^3 w_1^{31})}}\\right) \\\\
    &= l_1^1 \\times (1 - l_1^1) \\times x^1 \\tag{23}
    \\end{align}\\]</p>

    <p>Combining:</p>
    <p>\\[\\begin{align}
    \\frac{\\partial L}{\\partial w_1^{11}} &= (\\hat{y} - y) \\times [\\hat{y} \\times (1 - \\hat{y}) \\times w_2^1] \\times [l_1^1 \\times (1 - l_1^1) \\times x^1] \\\\
    &= \\Delta l_2 \\times w_2^1 \\times l_1^1 \\times (1 - l_1^1) \\times x^1 \\tag{24}
    \\end{align}\\]</p>

    <p>Let's define the error term for the first hidden node:</p>
    <p>\\[\\Delta l_1^1 = \\Delta l_2 \\times w_2^1 \\times l_1^1 \\times (1 - l_1^1) \\tag{25}\\]</p>

    <p>Then:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{11}} = \\Delta l_1^1 \\times x^1 \\tag{26}\\]</p>

    <p><strong>Similarly for other weights connected to the first hidden node:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{21}} = \\Delta l_1^1 \\times x^2 \\tag{27}\\]</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{31}} = \\Delta l_1^1 \\times x^3 \\tag{28}\\]</p>

    <p><strong>Computing \\(\\frac{\\partial L}{\\partial w_1^{12}}\\) (weight to second hidden node):</strong></p>
    <p>Following the same process:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{12}} = \\frac{\\partial L}{\\partial \\hat{y}} \\times \\frac{\\partial \\hat{y}}{\\partial l_1^2} \\times \\frac{\\partial l_1^2}{\\partial w_1^{12}} \\tag{29}\\]</p>

    <p>This gives us:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{12}} = \\Delta l_2 \\times w_2^2 \\times l_1^2 \\times (1 - l_1^2) \\times x^1 \\tag{30}\\]</p>

    <p>Let's define the error term for the second hidden node:</p>
    <p>\\[\\Delta l_1^2 = \\Delta l_2 \\times w_2^2 \\times l_1^2 \\times (1 - l_1^2) \\tag{31}\\]</p>

    <p>Then:</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{12}} = \\Delta l_1^2 \\times x^1 \\tag{32}\\]</p>

    <p><strong>Similarly for other weights connected to the second hidden node:</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{22}} = \\Delta l_1^2 \\times x^2 \\tag{33}\\]</p>
    <p>\\[\\frac{\\partial L}{\\partial w_1^{32}} = \\Delta l_1^2 \\times x^3 \\tag{34}\\]</p>

    <p><strong>Complete gradient for \\(W_1\\):</strong></p>
    <p>\\[\\frac{\\partial L}{\\partial W_1} = \\begin{bmatrix}
    \\Delta l_1^1 \\times x^1 & \\Delta l_1^2 \\times x^1 \\\\
    \\Delta l_1^1 \\times x^2 & \\Delta l_1^2 \\times x^2 \\\\
    \\Delta l_1^1 \\times x^3 & \\Delta l_1^2 \\times x^3
    \\end{bmatrix} \\tag{35}\\]</p>

    <p>Let's define the error vector for the hidden layer:</p>
    <p>\\[\\Delta l_1 = [\\Delta l_1^1 ~~\\Delta l_1^2] \\tag{36}\\]</p>

    <p>Then the gradient can be written as:</p>
    <p>\\[\\boxed{\\frac{\\partial L}{\\partial W_1} = [X]^T \\cdot \\Delta l_1} \\tag{37}\\]</p>

    <h4><strong>Matrix Form of Hidden Layer Error</strong></h4>
    <p>We can express the hidden layer errors in matrix form:</p>
    <p>\\[\\begin{align}
    \\Delta l_1 &= [\\Delta l_1^1 ~~\\Delta l_1^2] \\\\
    &= [\\Delta l_2 \\times w_2^1 \\times l_1^1 \\times (1-l_1^1) ~~\\Delta l_2 \\times w_2^2 \\times l_1^2 \\times (1-l_1^2)] \\\\
    &= (\\Delta l_2 \\cdot [W_2]^T) \\odot l_1 \\odot (1-l_1) \\tag{38}
    \\end{align}\\]</p>

    <p>where \\(\\odot\\) denotes element-wise multiplication.</p>

    <h3><strong>Backpropagation Algorithm Summary</strong></h3>
    <p><strong>Key equations for the 2-layer network with multiple hidden nodes:</strong></p>

    <div style="background-color: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
      <p><strong>1. Output layer error:</strong></p>
      <p>\\[\\Delta l_2 = (\\hat{y} - y) \\times \\hat{y} \\times (1 - \\hat{y}) \\tag{15}\\]</p>

      <p><strong>2. Hidden layer error:</strong></p>
      <p>\\[\\Delta l_1 = (\\Delta l_2 \\cdot [W_2]^T) \\odot l_1 \\odot (1-l_1) \\tag{38}\\]</p>

      <p><strong>3. Gradients:</strong></p>
      <p>\\[\\frac{\\partial L}{\\partial W_2} = [l_1]^T \\cdot \\Delta l_2 \\tag{18}\\]</p>
      <p>\\[\\frac{\\partial L}{\\partial W_1} = [X]^T \\cdot \\Delta l_1 \\tag{37}\\]</p>
    </div>

    <h3><strong>Python Implementation</strong></h3>
    <p>Using these 4 equations, one can directly implement a bare-bones training algorithm. The following code is adapted from <a href="https://iamtrask.github.io/2015/07/27/python-network-part2/#viewSource" target="_blank" style="color: blue; text-decoration: underline;">Andrew Trask's blog post</a>:</p>

    <div style="background-color: #2d3748; color: #e2e8f0; padding: 20px; margin: 20px 0; border-radius: 5px; font-family: 'Courier New', monospace;">
      <pre><code>import numpy as np

# Training data of x and y
X = np.array([[0,0,1]])  # Input (1x3)
y = np.array([[0]])      # Target output (1x1)

# Hyperparameters
alpha = 0.5              # Learning rate

# Initialize weights randomly
W_1 = np.random.random((3,2))  # Input to hidden (3x2)
W_2 = np.random.random((2,1))  # Hidden to output (2x1)

# Training loop 
for i in range(1000):
    
    # Forward pass
    l_1 = 1/(1+np.exp(-(np.dot(X, W_1))))      # Hidden layer output
    l_2 = 1/(1+np.exp(-(np.dot(l_1, W_2))))    # Final output
    
    # Backward pass - compute errors
    l_2_delta = (l_2 - y) * (l_2 * (1-l_2))    # Output layer error
    l_1_delta = l_2_delta.dot(W_2.T) * (l_1 * (1-l_1))  # Hidden layer error
    
    # Update weights using gradients
    W_2 = W_2 - alpha * l_1.T.dot(l_2_delta)   # Update output weights
    W_1 = W_1 - alpha * X.T.dot(l_1_delta)     # Update hidden weights

print("Final prediction:", l_2[0][0])
print("Target:", y[0][0])
      </code></pre>
    </div>

    <h3><strong>Key Insights</strong></h3>
    <ul>
      <li><strong>Error Propagation:</strong> Errors flow backward from output to input, scaled by weights and local gradients</li>
      <li><strong>Matrix Efficiency:</strong> The matrix formulation allows vectorized computation of all gradients simultaneously</li>
      <li><strong>Scalability:</strong> The same pattern extends to networks with more hidden layers and nodes</li>
      <li><strong>Local Computation:</strong> Each layer's error depends only on the next layer's error and the current layer's weights</li>
    </ul>

    <br/>
    <p><a href="https://anujgupta82.github.io/2016/09/09/gradients-4-1/" target="_blank" style="color: blue;">Prev</a></p>
  `
},

{
  id: 7,
  title: "Gradients - summary",
  date: "Sep 13, 2016",
  excerpt: "Take home on Computing Gradients that go into training Neural Nets",
  content: `
    <h2><strong>Generalization</strong></h2>
    <p>In this post, based on our conclusions in last post, we will try and generalise a strategy to compute gradients for arbitrary networks, as shown in figure below:</p>
    <img src="${NN_generic}" height="200" width="270" alt="Neural Network"/>
    <p><em>Simple neural net</em></p>
    <p>Imagine we have a (Feed forward) network with 1 input layer \\(L_0\\), 1 output layer \\(L_3\\) and 2 hidden layers \\(L_1\\), \\(L_2\\) respectively. Further, let \\(l_i\\) be output of layer \\(L_i\\). Also, by design, \\(l_0 = X\\) [input] and \\(l_3 = \\hat{y}\\) [output]. Let \\(W_{ij}\\) be weights between layers \\(L_i\\) and \\(L_j\\). We have 3 weight matrices - \\(W_{01}\\), \\(W_{12}\\) and \\(W_{23}\\).</p>
    
    <h2>Tables Are Cool</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <th style="text-align: left;">col 1 is left-aligned</th>
        <th style="text-align: center;">col 2 is centered</th>
        <th style="text-align: right;">col 3 is right-aligned</th>
      </tr>
      <tr>
        <td style="text-align: left;">$1600</td>
        <td style="text-align: center;">$12</td>
        <td style="text-align: right;">$1</td>
      </tr>
    </table>
    
    <hr>
    
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <th>Name</th>
        <th>Lunch order</th>
        <th>Spicy</th>
        <th>Owes</th>
      </tr>
      <tr>
        <td>Joan</td>
        <td>saag paneer</td>
        <td>medium</td>
        <td>$11</td>
      </tr>
      <tr>
        <td>Sally</td>
        <td>vindaloo</td>
        <td>mild</td>
        <td>$14</td>
      </tr>
      <tr>
        <td>Erin</td>
        <td>lamb madras</td>
        <td>HOT</td>
        <td>$5</td>
      </tr>
    </table>
    
    <hr>
    
    <p><strong>Grouping</strong></p>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <td>Content</td>
        <td>Long Cell</td>
      </tr>
      <tr>
        <td>Content</td>
        <td>Cell</td>
        <td>Cell</td>
      </tr>
    </table>
    
    <hr>

    <p>New Section | More | Data | And More | With an escaped '|'</p>
    <p>[Prototype table]</p>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr>
        <td>foo</td>
        <td>bar</td>
      </tr>
      <tr>
        <td>baz</td>
        <td>bim</td>
      </tr>
    </table>
  `
}
    
  ]; 

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  // Sort blogs by date (newest first) for navigation
  const sortedBlogs = [...blogs2021].sort((a, b) => new Date(b.date) - new Date(a.date));
  
  const handleNext = () => {
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    if (currentSortedIndex < sortedBlogs.length - 1) {
      const nextBlog = sortedBlogs[currentSortedIndex + 1];
      setSelectedBlog(nextBlog);
    }
  };

  const handlePrevious = () => {
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    if (currentSortedIndex > 0) {
      const previousBlog = sortedBlogs[currentSortedIndex - 1];
      setSelectedBlog(previousBlog);
    }
  };

  const hasNext = () => {
    if (!selectedBlog) return false;
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    return currentSortedIndex < sortedBlogs.length - 1;
  };

  const hasPrevious = () => {
    if (!selectedBlog) return false;
    const currentSortedIndex = sortedBlogs.findIndex(blog => blog.id === selectedBlog.id);
    return currentSortedIndex > 0;
  };
  return (
    <>
      <div className="content container mx-auto py-6 sm:py-8 lg:py-10">
        <h1 className="page__title text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center px-4">
          Blog Posts
        </h1>

        <div className="archive px-4 sm:px-6 md:px-8 lg:px-0">
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2023
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component
              title="Product management for AI products - old wine in new bottle?"
              date="Aug 05, 2023"
              excerpt="The answer lies in the specialized skill set required for product management in the realm of AI. The traditional principles and experiences in product management for standard software products do not suffice for AI products. Product management in AI development demands a significant upgrade."
            />
          </div>

          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2022
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component again
              title="Alexa AI and Layoffs"
              date="Nov 23, 2022"
              excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
            />
          </div>
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2021
          </h2>
          {blogs2021.map((blog) => (
            <div key={blog.id} className="list__item mb-4 sm:mb-6">
              <BlogPostCard
                title={blog.title}
                date={blog.date}
                excerpt={blog.excerpt}
                onClick={() => openModal(blog)}
              />
            </div>
          ))}
          <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2020
          </h2>
          <div className="list__item mb-4 sm:mb-6">
            <BlogPostCard // Use BlogPostCard component again
              title="Alexa AI and Layoffs"
              date="Nov 23, 2020"
              excerpt="Yesterday I was reading an article on recent layoffs at Alexa voice assistant unit in Amazon. This got me thinking. I believe the whole episode contains some critical lessons for many AI teams..."
            />
          </div>
          {/* ... Add more BlogPostCard components for other blog posts, passing in their data as props */}
        </div>

        {/* ——— 2016 Blog — Gradients for Neural Nets ——— */}
        <h2 className="archive__subtitle text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4 mt-6 sm:mt-8 border-b pb-2">
            2016
          </h2>
      <div className="blog-post-page">
        {blogs2016.map((blog) => (
          <div key={blog.id} className="list__item mb-4 sm:mb-6">
            <BlogPostCard
              title={blog.title}
              date={blog.date}
              excerpt={blog.excerpt}
              onClick={() => openModal(blog)}
            />
          </div>
        ))}

        {selectedBlog && (
          <div className="mt-10">
            <BlogViewer blog={selectedBlog} />
          </div>
        )}
      </div>
      </div>

      {/* Modal for displaying full blog content */}
      <BlogModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blog={selectedBlog}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={hasNext()}
        hasPrevious={hasPrevious()}
      />
    </>
  );
}

export default BlogPostPage;
