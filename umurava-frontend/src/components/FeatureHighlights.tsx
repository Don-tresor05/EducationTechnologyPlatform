const FeatureHighlights = () => {
    return (
      <section className="my-8 text-center bg-background">
        <h2 className="text-2xl font-bold text-secondary mb-4">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-secondary">Feature 1</h3>
            <p className="text-accent">Description of Feature 1.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-secondary">Feature 2</h3>
            <p className="text-accent">Description of Feature 2.</p>
          </div>
          <div className="p-4 border rounded bg-white">
            <h3 className="text-xl font-bold text-secondary">Feature 3</h3>
            <p className="text-accent">Description of Feature 3.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureHighlights;
  