// src/clerkAppearance.js
export const clerkAppearance = {
  variables: {
    colorBackground: "var(--color-bg)",
    colorText: "var(--color-text)",
    colorPrimary: "var(--color-accent)",
    colorInputBackground: "var(--color-surface)",
    colorInputText: "var(--color-text)",
    colorNeutral: "var(--color-muted)",
    borderRadius: "12px",
    fontFamily: "Inter, system-ui, sans-serif",
  },

  elements: {
    card: {
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: "1px solid var(--color-muted)",
      borderRadius: "12px",
      boxShadow: "0 0 12px rgba(200,160,90,0.35)",
      padding: "1rem",
    },

    headerTitle: {
      fontFamily: "Playfair Display, serif",
      fontSize: "1.5rem",
      color: "var(--color-primary)",
      fontWeight: "bold",
      letterSpacing: "-0.02em",
    },

    headerSubtitle: {
      fontSize: "0.875rem",
      color: "var(--color-muted)",
    },

    formFieldLabel: {
      fontSize: "0.875rem",
      fontWeight: "500",
      color: "var(--color-muted)",
    },

    formFieldInput: {
      backgroundColor: "var(--color-surface)",
      color: "var(--color-text)",
      border: "1px solid var(--color-muted)",
      borderRadius: "8px",
      padding: "0.5rem",
      outline: "none",
    },

    formButtonPrimary: {
      backgroundColor: "var(--color-accent)",
      color: "black",
      fontWeight: "500",
      borderRadius: "8px",
      padding: "0.5rem 1rem",
      cursor: "pointer",
    },

    footerActionLink: {
      color: "var(--color-accent)",
      textDecoration: "underline",
      cursor: "pointer",
    },

    dividerLine: {
      backgroundColor: "var(--color-muted)",
      height: "1px",
      margin: "1rem 0",
    },

    socialButtonsBlockButton: {
      backgroundColor: "var(--color-surface)",
      border: "1px solid var(--color-muted)",
      borderRadius: "8px",
      padding: "0.5rem 1rem",
      marginBottom: "0.5rem",
      cursor: "pointer",
    },
  },
};
