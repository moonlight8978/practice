/*
 * Created by SharpDevelop.
 * User: _MoonLight_
 * Date: 2018-04-26
 * Time: 9:05 PM
 * 
 * To change this template use Tools | Options | Coding | Edit Standard Headers.
 */
using System;

namespace App
{
	/// <summary>
	/// Description of Word.
	/// </summary>
	public class Word
	{
		public string original;
		public string standard;
		
		public Word(string token)
		{
			original = token;
			standard = token.ToLower();
		}
	}
}
