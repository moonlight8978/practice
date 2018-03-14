using System;
using System.Collections.Generic;
using System.Text;
using System.Text.RegularExpressions;

namespace Find
{
    class Program
    {
		// Get indexes of keys in sentence
		// return array of indexes
		public static List<int> CalculateIndexes(string sentence, string[] keys)
		{
			sentence = Regex.Replace(sentence, "[,.-:_'\"()]+", "");
			string[] words = sentence.Split(" ");
			List<int> positions = new List<int>();
			foreach (string key in keys)
			{
				positions.Add(Array.FindIndex(words, word => word == key));
			}
				
			return positions;
		}

		// Use array of indexes to calculate score
		public static int CalculateScore(List<int> positions)
		{
			int score = 0;
			positions.Sort();
			if (positions.Count == 1)
			{
				return 0;
			}
			for (int i = 0; i < positions.Count - 1; i += 1)
			{
				score += positions[i + 1] - positions[i];
			}
			return score;
		}
		// Check if sentence match provided keyword
		// return score of sentence (>= 0 if succeed, -1 if fail)
        public static int IsMatch(string sentence, string keyword)
        {
            string[] keys = keyword.Split(" ");
            foreach (string key in keys)
            {
                string regex = @"\b(" + key + @")\b";
                if (Regex.Match(sentence, regex).Length == 0)
                {
                    return -1;
                }
            }

			List<int> positions = CalculateIndexes(sentence, keys);
			int score = CalculateScore(positions);
			return score;
        }

		public static List<FindingResult> FindSentences(string paragraph, string keyword)
		{
			string[] sentences = paragraph.Split(".");
			List<FindingResult> findingResults = new List<FindingResult>();
			foreach (string sentence in sentences)
			{
				int score = IsMatch(sentence, keyword);
				if (score > 0)
				{
					findingResults.Add(new FindingResult(sentence, score));
				}
			}

			findingResults.Sort((x, y) => {
				return x.score - y.score;
			});
			return findingResults;
		}

		public class FindingResult
		{
			public FindingResult(string sentence, int score)
			{
				this.sentence = sentence;
				this.score = score;
			}
			public string sentence { get; set; }
			public int score { get; set; }
		}
        static void Main(string[] args)
        {
			string sample = "Một luồng ánh, sáng xanh lóe ra. Một, luồng ra. Một luồng ánh ra, ra. Một, luồng, ánh sáng.";
			string keyword = "Một ánh ra";
			List<FindingResult> findingResults = FindSentences(sample, keyword);

			foreach (FindingResult r in findingResults)
			{
				Console.WriteLine(r.score + " " + r.sentence);
			}
		}
	}
}
