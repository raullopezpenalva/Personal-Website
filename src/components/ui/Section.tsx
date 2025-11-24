import React from "react";

interface SectionProps {
    id?: string;
    title?: string;
    subtitles?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitles, children }) => {
    return (
        <section id={id} className="Section">
            {(title || subtitles) && (
                <header className="header">
                    {title && <h2 className="title">{title}</h2>}
                    {subtitles && <p className="subtitle">{subtitles}</p>}
                </header>
            )}
            <div className="content">
                {children}
            </div>
        </section>
    );
};

export default Section;