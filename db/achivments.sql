CREATE TABLE IF NOT EXISTS achievements (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    image_path VARCHAR(255) NOT NULL
);

INSERT INTO achievements (id, name, description, image_path) VALUES
    (UUID(), 'Bug Buster', 'For finding and fixing the most critical bug.', '/images/achievements/bugbuster.jfif'),
    (UUID(), 'Coffee Constructor', 'For creating an architectural solution after the third cup of coffee.', '/images/achievements/coffeeconstrucor.jfif'),
    (UUID(), 'Commitment King', 'За наибольшее количество коммитов за неделю.', '/images/achievements/commitking.jfif'),
    (UUID(), 'Pull-Request Paladin', 'For the highest quality pull-request.', '/images/achievements/prpaladin.jfif'),
    (UUID(), 'Debug Diver', 'For the opportunity to understand the most confusing code.', '/images/achievements/debagdiver.jfif'),
    (UUID(), 'Code Wizard', 'For creating a magic code that works right away.', '/images/achievements/codewizard.jfif'),
    (UUID(), 'Documentary Grandfather', 'For the most detailed and understandable technical documentation.', '/images/achievements/documentarygrandfather.jfif'),
    (UUID(), 'Scrum Samurai', 'For active participation and productivity in all scrum meetings throughout the month.', '/images/achievements/scrumsamurai.jfif'),
    (UUID(), 'Task-Tornado', 'For the fastest possible completion of all sprint tasks.', '/images/achievements/tasktornado.jfif'),
    (UUID(), 'Test Team Leader', 'For the highest number of successful unit tests.', '/images/achievements/testteamleader.jfif'),
    (UUID(), 'Guru Gita', 'For masterful use of Git and helping colleagues with git repositories.', '/images/achievements/gurugita.jfif'),
    (UUID(), 'Patch the Inventor', 'For finding an elegant solution to an old and long-unsolved bug.', '/images/achievements/patchinventor.jfif'),
    (UUID(), 'MVP Tycoon', 'For successful completion and release of the MVP project.', '/images/achievements/mvptycoon.jfif'),
    (UUID(), 'Champion of Cleanovik', 'For the cleanest and most readable code base.', '/images/achievements/championofcleanovik.jfif'),
    (UUID(), 'Algorithmic Aristocrat', 'For creating a complex but effective algorithm.', '/images/achievements/algorithmicaristocrat.jfif'),
    (UUID(), 'Creative Coyote', 'For the highest number of innovative product ideas proposed.', '/images/achievements/creativecoyote.jfif'),
    (UUID(), 'Night Encryptor', 'For developing code late at night (nightly accomplishments).', '/images/achievements/nightencryptor.jfif'),
    (UUID(), 'Security Sensei', 'For implementing reliable security measures in the project.', '/images/achievements/securitysensei.jfif'),
    (UUID(), 'API Асe', 'For creating the most elegant and easy-to-use API.', '/images/achievements/apiaс.jfif'),
    (UUID(), 'Front-End Phenomenon', 'For outstanding work on the front end of the project.', '/images/achievements/frontendphenomenon.jfif');