export default function Home() {
    return (
      <div
        style={{
          maxWidth: 700,
          margin: "50px auto",
          padding: "0 20px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          color: "#222",
        }}
      >
        <header
          style={{
            textAlign: "center",
            marginBottom: 40,
          }}
        >
        </header>
  
        <section
          style={{
            backgroundColor: "#1db954",
            borderRadius: 16,
            color: "#fff",
            padding: 30,
            boxShadow: "0 8px 20px rgba(202, 17, 122, 0.4)",
            textAlign: "center",
            lineHeight: 1.6,
          }}
        >
          <h3
            style={{
              fontSize: 26,
              marginBottom: 20,
              fontWeight: "700",
            }}
          >
            🌙 Quran & Hadith with Soul
          </h3>
          <p
            style={{
              fontSize: 18,
              maxWidth: 500,
              margin: "0 auto",
              fontWeight: "500",
            }}
          >
          Listen to the Holy Quran and authentic Hadiths through a beautifully crafted interface with smooth, soulful animations. Deepen your spiritual connection — anytime, anywhere.
          </p>
          <p
            style={{
              fontSize: 18,
              maxWidth: 500,
              margin: "20px auto 0 auto",
              fontWeight: "500",
              fontStyle: "italic",
            }}
          >
          🎧 استمع إلى القرآن الكريم والأحاديث النبوية الصحيحة من خلال واجهة مصممة بعناية، مع رسوم متحركة سلسة ومؤثرة. عِش تجربة روحانية أعمق — في أي وقت، ومن أي مكان.
          </p>
        </section>
  
        <footer
          style={{
            marginTop: 50,
            fontSize: 14,
            color: "#888",
            textAlign: "center",
            userSelect: "none",
          }}
        >
          &copy; 2008-2025 Meda Islamic App.
        </footer>
      </div>
    );
  }