const ChallengesSection = () => {
    return (
      <section className="my-8 text-center bg-background">
        <h2 className="text-2xl font-bold text-primary mb-4">Explore Challenges & Hackathons</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-primary">Challenge 1</h3>
            <p className="text-secondary">Details about Challenge 1</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-primary">Challenge 2</h3>
            <p className="text-secondary">Details about Challenge 2</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-primary">Challenge 3</h3>
            <p className="text-secondary">Details about Challenge 3</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ChallengesSection;
  