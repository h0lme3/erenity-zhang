import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endabuse',
  templateUrl: './endabuse.component.html',
  styleUrls: ['./endabuse.component.scss']
})
export class EndabuseComponent implements OnInit {
  contents = [
    {
      title: 'Confusions about Sexualities',
      label: 'Confusions',
      desc: `Becoming aware of sexual feelings is a normal developmental task of adolescence. Sometimes
    adolescents have same-sex feelings or experiences that cause confusion about their sexual
    orientation. This confusion appears to decline over time, with different outcomes for different
    individuals.`,
      route: "https://en.wikipedia.org/wiki/Questioning_(sexuality_and_gender)#:~:text=Becoming%20aware%20of%20sexual%20feelings,different%20outcomes%20for%20different%20individuals"
    },
    {
      title: 'Domestic Abuse studies',
      label: 'Domestic Abuse',
      desc: `Domestic violence also called domestic abuse is violence or other abuse that occurs in a domestic setting.`,
      route: "https://en.wikipedia.org/wiki/Domestic_violence"
    },
    {
      title: 'Marginalised Individuals Studies',
      label: 'Marginalised Individuals',
      desc: `Social exclusion or social marginalisation is the social disadvantage and relegation to the fringe of society.`,
      route: "https://en.wikipedia.org/wiki/Social_exclusion"
    },
    {
      title: 'Racism Conceptualism',
      label: 'Racism Conceptualism',
      desc: `Racism is the belief that groups of humans possess different behavioral traits corresponding to inherited attributes and can be divided based on the superiority of one race over another.`,
      route: "https://en.wikipedia.org/wiki/Racism"
    },
    {
      title: 'Socio, Economic, Political Influence From Hacking Events',
      label: 'Socio, Economic',
      desc: `Sociology is a social science that focuses on society, human social behavior,`,
      route: "https://en.wikipedia.org/wiki/Sociology"
    },
    {
      title: 'Tier 1 Ontological, Philosophical, Mathematical',
      label: 'Tier 1 Ontological',
      desc: `Ontology is the branch of philosophy that studies concepts such as existence, being, becoming, and reality.`,
      router: "/aboutus/tier1-ontological"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
