import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faqs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faqs-section.component.html',
  styleUrl: './faqs-section.component.css',
})
export class FAQsSectionComponent {
  faqs = [
    {
      q: 'Can I participate in KitaHack as a solo team?',
      a: "Yes, you are welcome to participate as a solo team. However, if you're looking for team members, you can join our Discord server link to connect with other participants.",
    },
    {
      q: "I'm a beginner. Can I still participate in KitaHack?",
      a: 'Yes, absolutely! We offer beginner-friendly workshops to help you build your idea.',
    },
    {
      q: 'Who owns the app/solution that my team creates during KitaHack?',
      a: 'Your team will retain ownership of the app/solution that you create during KitaHack.',
    },
    {
      q: 'Can I pick a solution outside the scope of the 17 Sustainable Development Goals (SDGs)?',
      a: 'While you are welcome to explore any solution ideas, for the purpose of the Global Solution Challenge (GSC) and KitHack 2023 competition, you are required to select a theme within the 17 SDGs.',
    },
    {
      q: 'What happens after KitaHack?',
      a: "After KitaHack, you'll have the opportunity to refine and improve your solution for the 2023 Global Solution Challenge.",
    },
    {
      q: 'Can I participate in multiple teams?',
      a: 'No, each student is only allowed to be a part of one submission for KitaHack.',
    },
  ];
}
