import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TestModeProvider } from "./contexts/TestModeContext";
import { TestModeBanner } from "./components/TestModeBanner";
import LandingPage from "./pages/LandingPage";
import Quiz from "./pages/Quiz";
import Dashboard from "./pages/Dashboard";
import Upsell from "./pages/Upsell";
import Subscription from "./pages/Subscription";
import Login from "./pages/Login";
import CourseDetail from "./pages/CourseDetail";
import LessonContent from "./pages/LessonContent";
import LessonContentV2 from "./pages/LessonContentV2";
import QuizContent from "./pages/QuizContent";
import ChallengeDetail from "./pages/ChallengeDetail";
import PromptsLibrary from "./pages/PromptsLibrary";
import Settings from "./pages/Settings";
import { BlogComingSoon, SupportComingSoon } from "./pages/ComingSoon";
import CourseViewerTest from "./pages/CourseViewerTest";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import SubscriptionTerms from "./pages/SubscriptionTerms";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={LandingPage} />
      <Route path={"/login"} component={Login} />
      <Route path={"/forgot-password"} component={ForgotPassword} />
      <Route path={"/reset-password"} component={ResetPassword} />
      <Route path={"/quiz/:step?"} component={Quiz} />
      <Route path={"/dashboard/:tab?"} component={Dashboard} />
      <Route path={"/upsell"} component={Upsell} />
      <Route path={"/subscription"} component={Subscription} />
      <Route path={"/course/:courseId"} component={CourseDetail} />
      <Route path={"/lesson/:courseId/:moduleId"} component={LessonContentV2} />
      <Route path={"/lesson-old/:courseId/:moduleId"} component={LessonContent} />
      <Route path={"/course-quiz/:courseId/:moduleId"} component={QuizContent} />
      <Route path={"/challenge/:challengeId"} component={ChallengeDetail} />
      <Route path={"/prompts"} component={PromptsLibrary} />
      <Route path={"/settings"} component={Settings} />
      <Route path={"/blog"} component={BlogComingSoon} />
      <Route path={"/support"} component={SupportComingSoon} />
      <Route path={"/course-viewer-test"} component={CourseViewerTest} />
      <Route path={"/privacy-policy"} component={PrivacyPolicy} />
      <Route path={"/terms"} component={Terms} />
      <Route path={"/subscription-terms"} component={SubscriptionTerms} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        switchable={true}
      >
        <TestModeProvider>
          <TooltipProvider>
            <TestModeBanner />
            <Toaster />
            <Router />
          </TooltipProvider>
        </TestModeProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
