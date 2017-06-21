const React = require('react');
const {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=arlington'>Arlington, VA</Link>
        </li>
        <li>
          <Link to='/?location=seattle'>Seattle, WA</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
