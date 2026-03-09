import { useThemeContext } from "@/app/contexts/ThemeContext";

export function PrimaryButton({ children, href, className = "", ...props }) {
  const { darkMode } = useThemeContext();
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`btn-primary ${darkMode ? "btn-primary-dark" : "btn-primary-light"} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function OutlineButton({ children, href, className = "", ...props }) {
  const { darkMode } = useThemeContext();
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      className={`btn-outline ${darkMode ? "btn-outline-dark" : "btn-outline-light"} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
