/*
 * Created by SharpDevelop.
 * User: _MoonLight_
 * Date: 2018-04-26
 * Time: 9:06 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace App
{
	/// <summary>
	/// Description of Splitter.
	/// </summary>
	public class Splitter
	{
		public string paragraph;
		
		public Splitter(string paragraph)
		{
			this.paragraph = paragraph;
		}
		
		public List<Word> split() {
			List<Word> words = new List<Word>();
			string without_specials = Regex.Replace(paragraph, "[,<.>/?;:'\"!&*()=+_-]", "");
			string[] tokens = Regex.Split(without_specials, "\\s+");
			foreach (string token in tokens) { 
				Word word = new Word(token);
				words.Add(word);
			}
			return words;
		}
	}
}
