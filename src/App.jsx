function App() {
  return (
    <>
      <div className="app h-screen bg-ms_dark z-0 relative overflow-hidden">
        <div className="light purple z-1 top-1/5 left-1/4"></div>
        <div className="light dark-purple z-1 top-1/3 left-1/3"></div>
        <div className="layover glass z-2"></div>
        <div className="scrolling-text z-3">
          <div className="RightToLeft">
            <span>Hi I'm Marco, Junior Web Developer.</span>
            <span>Hi I'm Marco, Junior Web Developer.</span>
          </div>
        </div>
        <div className="iphone z-4">{/* TODO: render components */}</div>
      </div>
    </>
  );
}

export default App;
