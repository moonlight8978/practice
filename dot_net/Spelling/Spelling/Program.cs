using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Spelling
{
	class Program
	{
		static void Main(string[] args)
		{
			SpellChecker sc = new SpellChecker();
			Console.WriteLine(sc.Check("nghengh"));
		}
	}
}
