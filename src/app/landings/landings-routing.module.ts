import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LandingsComponent } from './landings.component';

const routes: Routes = [
  {
    path: '',
    component: LandingsComponent,
    children: [{
      path: '', loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
    },
    { path: 'special-designed-test', loadChildren: () => import('./pages/special-designed-test/special-designed-test.module').then(m => m.SpecialDesignedTestModule) },
    { path: 'view-our-product', loadChildren: () => import('./pages/view-our-product/view-our-product.module').then(m => m.ViewOurProductModule) },
    { path: 'inProgress', loadChildren: () => import('./pages/inprogress/inprogress.module').then(m => m.InprogressModule) },
    { path: 'membership', loadChildren: () => import('./pages/membership/membership.module').then(m => m.MembershipModule) },
    { path: 'aboutus', loadChildren: () => import('./pages/aboutus/aboutus.module').then(m => m.AboutusModule) },
    { path: 'aboutyou', loadChildren: () => import('./pages/aboutyou/aboutyou.module').then(m => m.AboutyouModule) },
    { path: 'about-our-relationship', loadChildren: () => import('./pages/about-our-relation-ship/about-our-relation-ship.module').then(m => m.AboutOurRelationShipModule) },
    { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule) },
    { path: 'contactus', loadChildren: () => import('./pages/contactus/contactus.module').then(m => m.ContactusModule) },
    { path: 'roadmap', loadChildren: () => import('./pages/roadmap/roadmap.module').then(m => m.RoadmapModule) },
    { path: 'victim-sector', loadChildren: () => import('./pages/victim-program/victim-program.module').then(m => m.VictimProgramModule) },
    { path: 'critics', loadChildren: () => import('./pages/critics/critics.module').then(m => m.CriticsModule) },
    { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
    { path: 'survey', loadChildren: () => import('./pages/survey/survey.module').then(m => m.SurveyModule) },
    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
    { path: 'social', loadChildren: () => import('./pages/social/social.module').then(m => m.SocialModule) },
    { path: 'hacker-sdt', loadChildren: () => import('./pages/hacker-sdt/hacker-sdt.module').then(m => m.HackerSdtModule) },
    { path: 'for-founders', loadChildren: () => import('./pages/for-founders/for-founders.module').then(m => m.ForFoundersModule) },
    { path: 'hack-assesment', loadChildren: () => import('./pages/hack-assesment/hack-assesment.module').then(m => m.HackAssesmentModule) },
    { path: 'transition-program', loadChildren: () => import('./pages/transition-program/transition-program.module').then(m => m.TransitionProgramModule) },
    { path: 'psychological-assesment', loadChildren: () => import('./pages/psychological-assesment/psychological-assesment.module').then(m => m.PsychologicalAssesmentModule) },
    { path: 'bridging-program', loadChildren: () => import('./pages/bridging-program/bridging-program.module').then(m => m.BridgingProgramModule) },
    ],
  },






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingsRoutingModule { }
