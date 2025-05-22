import type { LanguageCode } from './ui';

export const loginTranslations: Record<LanguageCode, {
  title: string;
  subTitle: string;
  registerBtn: string;
  signInWithGoogle: string;
  or: string;
  forgotPassword: string;
  rememberMe: string;
  signInButton: string;
  incorrectCredentials: string;
}> = {
  es: {
    title: "Iniciar sesión",
    subTitle: "¿Aún no tienes una cuenta?",
    registerBtn: "Regístrate aquí",
    signInWithGoogle: "Iniciar sesión con Google",
    or: "O",
    forgotPassword: "¿Olvidaste tu contraseña?",
    rememberMe: "Recordarme",
    signInButton: "Iniciar sesión",
    incorrectCredentials: "Credenciales incorrectas. Por favor, inténtalo de nuevo."
  },
  en: {
    title: "Sign in",
    subTitle: "Don't have an account yet?",
    registerBtn: "Sign up here",
    signInWithGoogle: "Sign in with Google",
    or: "Or",
    forgotPassword: "Forgot password?",
    rememberMe: "Remember me",
    signInButton: "Sign in",
    incorrectCredentials: "Incorrect credentials. Please try again."
  },
  fr: {
    title: "Se connecter",
    subTitle: "Vous n'avez pas encore de compte ?",
    registerBtn: "Inscrivez-vous ici",
    signInWithGoogle: "Se connecter avec Google",
    or: "Ou",
    forgotPassword: "Mot de passe oublié ?",
    rememberMe: "Se souvenir de moi",
    signInButton: "Se connecter",
    incorrectCredentials: "Identifiants incorrects. Veuillez réessayer."
  },
  ca: {
    title: "Iniciar sessió",
    subTitle: "Encara no tens un compte?",
    registerBtn: "Registra't aquí",
    signInWithGoogle: "Iniciar sessió amb Google",
    or: "O",
    forgotPassword: "Has oblidat la contrasenya?",
    rememberMe: "Recorda'm",
    signInButton: "Iniciar sessió",
    incorrectCredentials: "Credencials incorrectes. Si us plau, torna-ho a provar."
  }
};
