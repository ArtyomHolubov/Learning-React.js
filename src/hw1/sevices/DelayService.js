async function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms ? ms : 1000);
  });
}

export default delay; 