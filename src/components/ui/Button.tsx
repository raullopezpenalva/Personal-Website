import { Link } from "react-router-dom";

interface ButtonProps {
    children: React.ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "ghost";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    to,
    onClick,
    variant = "primary",
}) => {
    const className = `btn btn-${variant}`;

    if (to) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

export default Button;

