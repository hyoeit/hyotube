class Youtube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAC6ynS06PUlJjXrl5XToBXGCU2aYrCMEs&part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }

  async search(value) {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=AIzaSyAC6ynS06PUlJjXrl5XToBXGCU2aYrCMEs&key=AIzaSyAC6ynS06PUlJjXrl5XToBXGCU2aYrCMEs&part=snippet&maxResults=25&q=${value}&type=video&key=${this.key}`,
      this.requestOptions
    );
    const result_1 = await response.json();
    return result_1.items;
  }
}

export default Youtube;
