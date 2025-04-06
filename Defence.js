import React from 'react';
import './Defence.css';
import pepperspray from '../images/pepper-spray.jpg';
import weapon from "../images/weapon.jpg";
import karate from "../images/karate.webp";
import strong from "../images/strong.jpg";
import calm from "../images/calm.jpg";
import search from "../images/search.png"
import fight from "../images/fight.png";
import self from "../images/self.jpg";
import help from "../images/help.jpeg";
import police from "../images/police.jpeg";
import move from "../images/move.jpeg";





export default function Defence() {
  return (
    <div className="defence-container">
      <h1 className="page-title">Self Defence Tips</h1>
      
      <div className="tips-container">
        <div className="tip">
          <h2>Tip 1: Use Pepper Spray</h2>
          <img src={pepperspray} alt="Pepper Spray" style={{ marginBottom: "40px" }} />

          <p>
            <strong>
          Pepper spray is a powerful self-defense tool that can temporarily incapacitate an attacker.
It works by causing severe irritation to the eyes and respiratory system.
This sudden reaction gives you precious seconds to escape from danger.
Always be mindful of the wind direction before using it.
Practice using your spray in a controlled environment so you’re fully prepared in an emergency.
</strong>
          </p>
        </div>
        
        <div className="tip">
          <h2>Tip 2: Use Nearby Objects as Weapons</h2>
          <img src={weapon} alt="weapon" style={{ marginBottom: "40px" }} />
          <p>
            <strong>
          In a dangerous situation, use objects around you to defend yourself. A handbag, umbrella, water bottle, keys, or even a mobile phone can serve as weapons to strike an attacker and create an opportunity to escape. Aim for sensitive areas like the eyes, nose, or groin to cause maximum impact. Stay alert and aware of your surroundings to quickly grab an object if needed.
          </strong>
          </p>

        </div>
        
        <div className="tip">
          <h2>Tip 3: Learn Physical Defence (Karate/Kung Fu)</h2>
          <img src={karate} alt="karate" style={{ marginBottom: "40px" }} />
          <p>
            <strong>
          Learning basic self-defense techniques such as karate or kung fu empowers you to protect yourself physically.
Regular training builds not only strength and agility but also boosts your confidence.
It teaches you how to disable an attacker quickly by targeting vulnerable areas like the knees, groin, or eyes.
These skills are invaluable in a critical moment when verbal warnings may not suffice.
Investing time in self-defense training can be a lifelong benefit for your personal safety.
</strong>
          </p>
        </div>
        
        <div className="tip">
          <h2>Tip 4: Stay Strong & Self-Motivated</h2>
          <img src={strong} alt="strong" style={{ marginBottom: "40px" }} />
          <p>
            <strong>
          In a threatening situation, your mental strength is as vital as your physical ability.
Staying calm and thinking clearly helps you assess the situation quickly.
Positive self-talk reinforces your determination and aids in overcoming fear.
Mental preparedness allows you to act decisively and effectively under pressure.
Remember, a focused mind can be your strongest defense when physical options are limited.

</strong>
          </p>
        </div>
      </div>

      <div className="action-guide">
        <h2>What to do when you are in trouble?</h2>
        <ol className="steps-list">
          <li>
          <img src={calm} alt="calm 1" style={{ marginBottom: "40px" }} />
            <p><strong>Step 1:</strong> Stay calm and quickly assess the situation.</p>
          </li>
          <li>
          <img src={search} alt="search 2" style={{ marginBottom: "40px" }} />
            <p><strong>Step 2:</strong> Identify escape routes and safe areas nearby.</p>
          </li>
          <li>
          <img src={fight} alt="fight 3" style={{ marginBottom: "40px" }} />
            <p><strong>Step 3:</strong> Use objects near by you effectively.</p>
          </li>
          <li>
          <img src={self} alt="self 4" style={{ marginBottom: "40px" }} />
            <p><strong>Step 4:</strong> If necessary, engage in physical defense using martial arts techniques.</p>
          </li>
          <li>
            <img src={help} alt="help 5" style={{ marginBottom: "40px" }} />
            <p><strong>Step 5:</strong> Call for help immediately and alert nearby people.</p>
          </li>
          <li>
          <img src={move} alt="move 6" style={{ marginBottom: "40px" }} />
            <p><strong>Step 6:</strong> Move to a safe place as soon as possible.</p>
          </li>
          <li>
          <img src={police} alt="police 7" style={{ marginBottom: "40px" }} />
            <p><strong>Step 7:</strong> Report the incident to the authorities and document details.</p>
          </li>
        </ol>
      </div>
    </div>
  );
}
